function curry(fn) {
  this.placeholder = Symbol('placeholder')
  function removePlaceHolders(args) {
    return args.filter(arg => arg !== null)
  }

  function mergeArguments(args1, args2) {
    let merged = args1.map((arg, index) => arg === null ? args2[index] : arg)
    if (merged.length < args2.length) {
      merged = merged.concat(args2.slice(args1.length))
    }
    return merged
  }

  return function curried(...args) {
    if (removePlaceHolders(args).length >= fn.length) {
      return fn.apply(this, args)
    }

    return function(...args2) {
      return curried.apply(this, mergeArguments(args, args2))
    }
  }
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)

// console.log(curriedJoin(1, 2, 3)) // '1_2_3'

// console.log(curriedJoin(1)(2, 3)) // '1_2_3'

console.log(curriedJoin(1, 2)(3)) // '1_2_3'

// console.log(curriedJoin(1)(2)(3)) // '1_2_3'