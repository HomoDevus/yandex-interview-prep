function squash(str) { // bannanna
  let res = '' // b
  let stack = [] // b

  for (let i = 0; i <= str.length; i++) { // 1
    if (i === str.length || (stack.length !== 0 && stack.at(-1) !== str[i])) {
      let counter = 0 // 1
      let letter = stack.at(-1) // b

      while(stack.length > 0 && stack.at(-1) === letter) {
        stack.pop()
        counter++
      }

      if (counter > 1) {
        res += counter + letter
      } else {
        res += letter
      }
    }

    stack.push(str[i])
  }

  return res
}

console.log(squash('bannanna'))
console.log(squash('a'))
console.log(squash('aaaaa'))
console.log(squash('aabaaa'))