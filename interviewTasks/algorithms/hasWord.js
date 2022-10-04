function hasWord(words, findWord) {
  let wordsWithoutLetter = new Set()

  for (let word of words) {
    wordsWithoutLetter.add(word)

    for (let i = 0; i < word.length; i++) {
      wordsWithoutLetter.add(word.split('').filter((letter, index) => index !== i).join(''))
    }
  }

  return wordsWithoutLetter.has(findWord)
}

console.log(hasWord(['test'], 'tea'))