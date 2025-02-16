// function namespace(str) { // 'a.b.c.d.e'
//   str = str.split('.')
//   let ans = {} // {a: {b: {}}}
//   let currPos // ans.a
//   for (let letter of str) {
//     if (!currPos) {
//       ans[letter] = {}
//       currPos = ans[letter]
//       continue
//     }
//
//     currPos[letter] = {}
//     currPos = currPos[letter]
//   }
//
//   return ans
// }

function namespace(str) {
  const path = str.split('.')
  const obj = {}
  let currPointer = obj

  for (let i = 0; i < path.length; i++) {
    const letter = path[i]

    currPointer[letter] = {}
    currPointer = currPointer[letter]
  }

  return obj
}

console.log(namespace('a.b.c.d.e'))