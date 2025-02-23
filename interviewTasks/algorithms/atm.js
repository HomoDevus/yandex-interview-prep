// function getMoney(ammount, limits) {
//   const ans = []
//   const limitsKeys = Object.keys(limits).map(it => parseInt(it)).sort((a, b) => b - a)
//   debugger
//
//   for (let limitKey of limitsKeys) {
//     let amountOfBill = Math.floor(ammsount / limitKey)
//     amountOfBill = Math.min(amountOfBill, limits[limitKey])
//
//     if (amountOfBill > 0) {
//       ans.push({[limitKey]: amountOfBill})
//       ammount -= amountOfBill * limitKey
//     }
//
//     if (ammount === 0) break
//   }
//
//   return ans
// }

function getMoney(amount, limit) {
  let limitKeys = Object.keys(limit).map(limit => parseInt(limit)).sort((a, b) => a - b)
  let result = []

  while (amount > 0) {
    let bill = limitKeys.pop()
    let amountOfBills = Math.min(Math.floor(amount / bill), limit[bill])
    amount -= amountOfBills * bill

    if (amountOfBills) {
      result.push({bill, amount: amountOfBills})
    }
  }

  return result
}

let limits = {1000: 5, 500: 2, 100: 5, 50: 100, 30: 6}

console.log(getMoney(230, limits))
console.log(getMoney(1000, limits))
console.log(getMoney(200, limits))
console.log(getMoney(150, limits))
console.log(getMoney(120, limits))
console.log(getMoney(275, limits))

function getMoney(amount, limit) {}