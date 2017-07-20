// need some thin wrapper around values to go up and down path
//
//
// const ValueObject = {
//   node: value,
//   kind: typeof,
//   isRoot: false,
//   isLeaf: false,
//   isPrimitive: false,
//   branches: [],
//   isFirst: false,
//   isLast: false,
//   parent: {},
// }
//
// class It {
//   constructor(x) {
//     // this.tree = {
//     // parent: {},
//     // }
//
//     // this.root = x
//
//     // this.previous = x
//     this.current = x
//
//     this.depth = 0
//     this.all = new Set()
//     // this.path
//     // this.key
//   }
//
//   get node() {
//     return this.current
//   }
//
//   addBranch() {}
//
//   // for updating
//   branchHead() {}
//
//   goUp() {
//     this.depth--
//   }
//   goDown(current) {
//     this.parent = this.current
//     this.depth++
//     this.current = current
//   }
//   // not needed but conceptually
//   // goNext() {}
//
//   find() {}
//   path() {}
// }
// const it = x => new It(x)


// return Array.from(parents.values()).indexOf(value) !== -1
// const keys = Array.from(parents.keys())
// console.log('___pk', {keys})
// for (let k = 0; k < keys.length; k++) {
//   const key = keys[k]
//   const matches =
//     depth.includes(key) || (key.includes && key.includes(depth))
//   console.log({key, matches, depth})
//   // .has(value)
//   if (matches) {
//     let has = false
//     parents.get(key).forEach(haz => {
//       if (value === haz) has = true
//     })
//     return has
//   }
// }

// for (let i = depth; i >= depth; i--) {
// if (parents.get(i).has(value)) return true
// }

// return false


// const pps = []
// const ppHas = value => {
//   for (let i = 0; i < pps.length; i++) {
//     if (pps[i] === value) {
//       return true
//     }
//   }
// }
// const ppAdd = value => pps.push(value)
// const ppPop = () => pps.pop()

// else if (ppHas(node)) {
//   if (ENV_DEBUG) {
//     console.log('PPHAS!!!!!!!!!!!', {node, path: this.path})
//   }
//   this.isCircular = true
// }


// ----- clear/update ----
// if (!isUndefined(this.iteratee)) {
//   this.iteratee[this.key] = value
// }
// // dot.set(this.iteratee, this.key, value)

// dot.set(this.iteratee, this.path, value)

// dot.set(this.iteratee, this.key, value)
// console.log({traverser: this})

// @NOTE think about this more, but updating can change structure
// if (isTrue(clear)) clearParents()

// ----- parents
// if (!this.parents.has(depth)) this.parents.set(depth, new Set())
// this.parents.get(depth).add(value)

// (isObj(value) ? parents.add(value) : parents.add(value))
// const removeLastParent = () => parents.delete(lastParent)

// parents.forEach(parent => (parent.has(value) ? parent.delete(value) : null))
// parents.delete(value)


// ---- eq

// from underscore.js & ramda
//
// Assume equality for cyclic structures. The algorithm for detecting cyclic
// structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
//
// Initializing stack of traversed objects.
// It's done here since we only need them for objects and arrays comparison.
// let length = stackA.length
// while (length--) {
//   // Linear search. Performance is inversely proportional to the number of
//   // unique nested structures.
//   if (stackA[length] === a) return stackB[length] === b
// }
//
// // Add the first object to the stack of traversed objects.
// stackA.push(a)
// stackB.push(b)

// BREAKS ANY BUT OBJ
// if (!isObjLoose(node)) {
//   node = _node
//   return notEqual()
// }
// else {
//   _node = node
// }

// if (isObjNotNull(node))  {
//   // _node = node
//   // nodes.push(node)
//   // node = node[key]
// }
// else {
//   // node = nodes.pop()
// }

// node = node ? node[traverser.key] : node
// instance.before(traverser => {
//   // node = traverser.iteratee
//   // if (!isObjNotNull(x)) return
//   // // nodes.push(x)
//   // x = x[key]
//   // nodes.push(x)
// })
// instance.after(() => {
//   // x = node
//   // console.log('x before pop', {x})
//   // node =
//   // nodes.pop()
//   // x = node
//   // console.log('x after pop, nodes', {x})
// })
