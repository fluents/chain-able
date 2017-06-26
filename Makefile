cwd := $(shell pwd)

# copy -recursively -forced
copy:
	cp -R -f eh dists/
strip:
  npm run strip && npm run strip:dist

lint:
  npm run lint

# remove dist, -force -recursively even if it exists and is a folder
clean:
	rm -f -r dists/ && rm -f -r dist/ && rm -f -r test-dist/

old:
	npm run strip:all && npm run buble:all

test:
	npm run test
testall:
  npm run test && npm run test:built
cli:
  node build/cli.js

cov:
	npm run prepublish

quick:
	node build/cli.js --quick --test

build:
  npm run strip:all && npm run cli && npm run gzip
buildprod:
  node build/cli.js --production


.PHONY: clean, quick
