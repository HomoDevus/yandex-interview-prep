function substr(substr, str) {
  let substrIndex = 0

  for (let i = 0; i < str.length; i++) {
    if (substr[substrIndex] === str[i]) {
      substrIndex++
      if (substrIndex === substr.length) return true
    }
  }

  return false
}

console.log(substr('ab', 'acdsdf'))