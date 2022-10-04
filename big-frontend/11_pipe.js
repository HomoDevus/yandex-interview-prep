function pipe(funcs) {
  return function(arg) {
    let result

    for (let func of funcs) {
      if (!result) {
        result = func(arg)
      } else {
        result = func(result)
      }
    }

    return result || arg
  }
}

const times = (y) =>  (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) =>  (x) => x - y
const divide = (y) => (x) => x / y

let first = pipe([
  times(2),
  times(3)
])
// x * 2 * 3

let second = pipe([
  times(2),
  plus(3),
  times(4)
])
// (x * 2 + 3) * 4

let third = pipe([
  times(2),
  subtract(3),
  divide(4)
])
// (x * 2 - 3) / 4

console.log(first(2), second(2), third(2))