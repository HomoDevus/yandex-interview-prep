function visualizeText(str) {
  const dict = {}
  let max = 0 // 2

  for (let letter of str) {
    dict[letter] = dict[letter] ? dict[letter] + 1 : 1
    max = Math.max(max, dict[letter])
  }

  const letters = Object.keys(dict).sort()

  for (let row = max; row > 0; row--) { // 2
    let rowText = ''

    for (let letter of letters) { // h
      if (dict[letter] >= row) {
        rowText += '#'
      } else {
        rowText += ' '
      }
    }

    console.log(rowText)
  }

  console.log(letters.join(''))
}

visualizeText('Hello, world!')