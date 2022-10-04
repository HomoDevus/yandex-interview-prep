function shuffle(arr) {
  let arrCopy = [...arr]
  let i = 0

  while(arrCopy.length) {
    const randomIndex = Math.floor(Math.random() * (arrCopy.length))
    arr[i] = arrCopy.splice(randomIndex, 1)[0]
    i++
  }
}

let arr = [1, 2, 3, 4]
shuffle(arr)
console.log(arr)

// const count = new Map()
// const total = 100000
// for (let i = 0; i < total; i++) {
//   const arr = [1, 2, 3, 4]
//   shuffle(arr)
//
//   const result = arr.join('_')
//   if (count.has(result)) {
//     count.set(result, count.get(result) + 1)
//   } else {
//     count.set(result, 1)
//   }
// }
//
// console.log(count)

