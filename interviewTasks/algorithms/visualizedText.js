function visualizeText(str) {
  const LettersCount = {}
  let maxLetters = 0

  for (let letter of str) {
    if (!LettersCount[letter]) {
      LettersCount[letter] = 0
    }

    LettersCount[letter] += 1

    if (LettersCount[letter] > maxLetters) {
      maxLetters = LettersCount[letter]
    }
  }

  const Letters = Object.keys(LettersCount).sort()

  for (let i = maxLetters; i > 0; i--) {
    let ansLine = []

    for (let letter of Letters) {
      if (LettersCount[letter] >= i) {
        ansLine.push('#')
      } else {
        ansLine.push(' ')
      }
    }

    console.log(ansLine.join(''))
  }

  console.log(Letters.join(''))
}

visualizeText('Hello, world!')