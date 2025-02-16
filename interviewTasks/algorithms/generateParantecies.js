// Less efficient in memory
function brackets(n) { // 2
  let result = [] //

  function combination(opened, closed, str) { // 1 0 (()
    if (opened === n && closed === n) {
      result.push(str)
      return
    }

    if (opened > closed) {
      combination(opened, closed + 1, str + ')')
    }

    if (opened < n) {
      combination(opened + 1, closed, str + '(')
    }
  }

  combination(0, 0, '')

  return result
}

// Most efficient
function brackets(n) { // 2
  let result = []
  let stack = []

  function combination(opened, closed) { // 1 0 (()
    if (opened === n && closed === n) {
      result.push(stack.join(''))
      return
    }

    if (opened > closed) {
      stack.push(')')
      combination(opened, closed + 1)
      stack.pop()
    }

    if (opened < n) {
      stack.push('(')
      combination(opened + 1, closed)
      stack.pop()
    }
  }

  combination(0, 0, '')

  return result
}

console.log(brackets(1))
console.log(brackets(3))