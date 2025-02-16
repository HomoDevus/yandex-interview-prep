// function substr(substr, str) {
//   let substrIndex = 0
//
//   for (let i = 0; i < str.length; i++) {
//     if (substr[substrIndex] === str[i]) {
//       substrIndex++
//       if (substrIndex === substr.length) return true
//     }
//   }
//
//   return false
// }

function substr(substr, str) {
  for (let i = 0; i < str.length; i++) {
    let isNotEqual = false

    for (let j = 0; !isNotEqual && j < substr.length; j++) {
      if (substr[j] !== str[i + j]) {
        isNotEqual = true
      }
    }

    if (!isNotEqual) return true
  }

  return false
}

console.log(substr('ab', 'acdsdf'))