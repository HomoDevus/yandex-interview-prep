function vertSym(dots) {
  const sortedDots = dots.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
  let vertCenter

  if (dots.length < 2) {
    return true
  }

  if (dots.length % 2 === 1) {
    vertCenter = sortedDots[Math.floor(dots.length / 2)][0]
  } else if (dots.length % 2 === 0) {
    vertCenter = (sortedDots[dots.length / 2][0] - sortedDots[dots.length / 2 - 1][0]) / 2
    if (!Number.isInteger(vertCenter)) return false
  }

  for (let i = Math.floor(dots.length / 2); i < dots.length - 1; i++) {
    if (sortedDots[i][0] === sortedDots[i + 1][0]) {
      const tmp = sortedDots[i]
      sortedDots[i] = sortedDots[i + 1]
      sortedDots[i + 1] = tmp
    }
  }

  let leftIndex = 0
  let rightIndex = dots.length - 1
  while (leftIndex < rightIndex) {
    const [leftDotX, leftDotY] = sortedDots[leftIndex]
    const [rightDotX, rightDotY] = sortedDots[rightIndex]

    if (leftDotY !== rightDotY || (rightDotX - vertCenter) + (leftDotX - vertCenter) !== 0) {
      debugger
      return false
    }

    leftIndex++
    rightIndex--
  }

  return true
}

const isVertSym = (...props) => console.log(vertSym(...props))

isVertSym([[0, 0], [0, 1], [1, 1], [2, 2], [3, 1], [4, 0], [4, 1]]) // true
isVertSym([[0, 0], [0, 0], [1, 1], [2, 2], [3, 1], [4, 0]]) // false
isVertSym([]) // true
isVertSym([[0, 0]]) // true
isVertSym([[0, 0], [10, 0]]) // true
isVertSym([[0, 0], [11, 1]]) // false
isVertSym([[0, 0], [12, 1]]) // false
isVertSym([[0, 0], [1, 0], [3, 0]]) // false


const isVertSym = (arr) => {
  if (arr.length === 1) return true;
  const midX = arr.reduce((acc, [x, y]) => acc+x, 0) / arr.length
  // убираем все точки, находящиеся на вертикали midX - ибо они не влияют на симметричность
  const points = arr.filter(([x, y]) => x !== midX)
  const set = new Set()
  // складывает точки в set (при этом симметричные "схлопнутся")
  for (let [x, y] of points) {
    const distFromMidXToPointX = Math.abs(midX - x)
    set.add(`${distFromMidXToPointX}_${y}`)
  }
  // если точек в два раза меньше
  return (set.size === points.length / 2)
}