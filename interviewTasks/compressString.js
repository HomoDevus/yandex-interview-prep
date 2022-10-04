// Сжатие строки
// ('AAABbbbBcCCC') => 'A3Bb3BcC3'

function compressString(str) { // AAABbbbBcCCC
  let newString = ''
  let counter = 0 // 1
  let currLetter = str[0] // B

  for (let i = 0; i <= str.length; i++) { // b
    let letter = str[i]

    if (letter === undefined || (counter > 0 && letter !== currLetter)) {
      if (counter === 1) {
        newString += currLetter
      } else {
        newString += currLetter + String(counter)
      }
      counter = 1
      currLetter = letter
    } else {
      counter += 1
    }
  }

  return newString
}

console.log(compressString('AAABbbbBcCCC'))