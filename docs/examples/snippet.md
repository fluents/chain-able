# simple snippet

For a minimal chaining setup with the bare bones features, this snippet is excellent.

If more features are needed, it's compatible to just swap out for chain-able.

```js
class Chain {
  constructor(parent) {
    this.parent = parent
    const store = new Map()
    this.store = store

    this.get = key => store.get(key)
    this.has = key => store.has(key)
    this.clear = () => {
      store.clear()
      return this
    }
    this.set = (key, val) => {
      store.set(key, val)
      return this
    }
    this.delete = key => {
      store.delete(key)
      return this
    }
    this.when = (cond, t = Function.prototype, f = Function.prototype) => {
      cond ? t(this) : f(this)
      return this
    }
    this.merge = obj => {
      Object.keys(obj).forEach(key => {
        let val = obj[key]
        if (this.has(key)) val = [this.get(key), val]
        return this.set(key, val)
      })
      return this
    }

    this.extend = methods =>
      methods.forEach(method =>
        this[method] = arg =>
          this.set(method, arg))
  }
}
```

<details>
<summary>compiled (< 300 bytes gzipped)</summary>

```js
var Chain=function(f){var c=this;this.parent=f;var e=new Map;this.store=e;this.get=function(a){return e.get(a)};this.has=function(a){return e.has(a)};this.clear=function(){e.clear();return c};this.set=function(a,b){e.set(a,b);return c};this["delete"]=function(a){e["delete"](a);return c};this.when=function(a,b,d){b=void 0===b?Function.prototype:b;d=void 0===d?Function.prototype:d;condition?b(c):d(c);return c};this.merge=function(a){Object.keys(a).forEach(function(b){var d=a[b];c.has(b)&&(d=[c.get(b),
d]);return c.set(b,d)});return c};this.extend=function(a){return a.forEach(function(b){return c[b]=function(a){return c.set(b,a)}})}};
```

</details>
