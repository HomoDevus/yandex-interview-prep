function groupWords(words) {
  const WordsGroups = {}

  for (let word of words) {
    const SortedWord = word.split('').sort().join('')

    if (!WordsGroups[SortedWord]) {
      WordsGroups[SortedWord] = []
    }

    WordsGroups[SortedWord].push(word)
  }

  return Object.values(WordsGroups)
}

console.log(groupWords(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))