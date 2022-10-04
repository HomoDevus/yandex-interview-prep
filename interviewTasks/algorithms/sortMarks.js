function sortMarks(marks) {
  const maxVal = Math.max(marks)
  const minVal = Math.min(marks)
  const countedMarks = []
  const sortedMarks = []

  for (let i = 0; i < m + 1; i++) {
    countedMarks.push(0)
  }

  for (let mark of marks) {
    countedMarks[mark] += 1
  }

  for (let i = 1; i < countedMarks.length; i++) {
    let marksAmount = countedMarks[i]
    for (let mark = 0; mark < marksAmount; mark++) {
      sortedMarks.push(i)
    }
  }

  return sortedMarks
}

console.log(sortMarks([5, 4, 3, 4, 3, 5, 2, 1, 1, 1], 5))