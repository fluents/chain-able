// eslint-disable-next-line
'use strict'

// const {XMLHttpRequest} = require('xmlhttprequest')
global.fetch = require('node-fetch')
var Frisbees = require('../../frisbee')
var log = require('fliplog')

log.registerCatch()

class GitHubApiLoader {
  constructor() {
    this.apiBase = 'https://api.github.com'
    this.api = Frisbees({baseURI: this.apiBase})
  }

  loadUserData(username, callback) {
    const request = this.apiGet(`${this.apiBase}/users/${username}`)
    // require('fliplog').prettyformat(request).exit()
    return request
      .then(data => console.log(data) && callback(data))
      .catch(error => console.log({error}))

    request.success(profile => {
      this.apiGet(profile.repos_url).success(repositories => {
        callback({profile, repositories}, null)
      })
    })

    request.error((result, req) => {
      const error = this.identifyError(result, req)
      callback(null, error)
    })
  }

  loadRepositoriesLanguages(repositories, callback) {
    const languagesUrls = this.extractLangURLs(repositories)

    const langStats = []
    let requestsAmount = languagesUrls.length

    languagesUrls.forEach(repoLangUrl => {
      const request = this.apiGet(repoLangUrl)
      request.error(req => requestsAmount--)
      request.success(repoLangs => {
        langStats.push(repoLangs)
        if (langStats.length === requestsAmount) {
          // all requests were made
          callback(langStats)
        }
      })
    })
  }

  identifyError(result, request) {
    const error = {
      message: result.message,
    }

    if (request.status === 404) {
      error.isWrongUser = true
    }

    const limitRequests = request.getResponseHeader('X-RateLimit-Remaining')
    if (Number(limitRequests) === 0) {
      const resetTime = request.getResponseHeader('X-RateLimit-Reset')
      error.resetDate = new Date(Number(resetTime) * 1000)

      // full message is too long, leave only general message
      error.message = error.message.split('(')[0]
    }

    return error
  }

  extractLangURLs(profileRepositories) {
    return profileRepositories.map(repository => repository.languages_url)
  }

  apiGet(url) {
    const request = this.buildRequest(url)
    return request

    return {
      success(callback) {
        request.addEventListener('load', () => {
          if (request.status === 200) {
            const response = JSON.parse(request.responseText)
            this._url = {
              lastModified: request.getResponseHeader('Last-Modified'),
              data: response,
            }

            callback(response, request)
          }
          else {
            require('fliplog').data({request}).red('error').echo()
          }
        })
      },
      error(callback) {
        request.addEventListener('load', () => {
          if (request.status !== 200 && request.status !== 304) {
            callback(JSON.parse(request.responseText), request)
          }
          else {
            require('fliplog').data({request}).red('error').echo()
          }
        })
      },
    }
  }

  buildRequest(url) {
    // const request = new XMLHttpRequest()
    // request.open('GET', url)
    // this.buildApiHeaders(request, url)
    // request.send()

    // @TODO could easily chain these, probably exists already, just not as pretty
    return this.api.get(url, {
      headers: {Accept: 'application/vnd.github.v3+json'},
    })

    // return request
  }

  buildApiHeaders(request, url) {
    request.setRequestHeader('Accept', 'application/vnd.github.v3+json')

    const urlCache = this._url

    if (urlCache) {
      request.setRequestHeader('If-Modified-Since', urlCache.lastModified)
    }
  }
}

module.exports = GitHubApiLoader
