// My
// var moveZeroes = function (nums) {
//   for (let i = 0; i < nums.length - 1; i++) { // [1,3,12,0,0]
//     if (nums[i] === 0) {
//       let tempI = i + 1
//       while (nums[tempI] === 0) {
//         if (tempI === nums.length - 1) {
//           break
//         }
//         tempI += 1
//       }
//       nums[i] = nums[tempI]
//       nums[tempI] = 0
//     }
//   }
//   return nums
// };

// Yura
// function moveZeros(arr) {
//   let start1 = 0
//   arr.forEach((item, i) => {
//     if (arr[i] !== 0) arr[start1++] = arr[i]
//   })

//   let start2 = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) arr[start2++] = arr[i]
//   }

//   return arr
// }


function moveZeros(arr) {
  let left = 0

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] !== 0) {
      arr[left++] = arr[right]
    }
  }

  for (; left < arr.length; left++) {
    arr[left] = 0
  }

  return arr
}

console.log(moveZeros([0, 1, 0, 0, 3, 12]))
