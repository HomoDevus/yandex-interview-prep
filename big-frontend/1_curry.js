const join = (a, b, c) => {
  return `${a}_${b}_${c}`
}

function curry(fn) {
  return function (...args) {
    if (fn.length > args.length) {
      return curry(fn.bind(this, ...args))
    }

    return fn.call(this, ...args)
  }
}

const curriedJoin = curry(join)

console.log(curriedJoin(1, 2, 3)) // '1_2_3'

console.log(curriedJoin(1)(2, 3)) // '1_2_3'

console.log(curriedJoin(1, 2)(3)) // '1_2_3'

console.log(curriedJoin(1)(2)(3)) // '1_2_3'