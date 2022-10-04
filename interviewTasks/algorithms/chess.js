function rookSolution(boardX, boardY, rooksCords) {
  function countIntersections(board) {
    for (let rooksAmount of Object.values(board)) {
      intersections += rooksAmount - 1
    }
  }

  let intersections = 0
  const RooksCountX = {}
  const RooksCountY = {}

  for (let [rookX, rookY] of rooksCords) { // 0
    if (!RooksCountX[rookX]) {
      RooksCountX[rookX] = 0
    }

    if (!RooksCountY[rookY]) {
      RooksCountY[rookY] = 0
    }

    RooksCountX[rookX] += 1
    RooksCountY[rookY] += 1
  }

  countIntersections(RooksCountX)
  countIntersections(RooksCountY)

  return intersections
}

console.log(rookSolution(4,4, [[2, 2], [2, 3]]))