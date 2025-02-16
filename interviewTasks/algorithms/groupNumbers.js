function getHash(num) { // 0
  let sum = 0 // 5
  let amount = 0 // 2

  while (num > 0) {
    const lastDigit = num % 10 // 1
    sum += lastDigit

    if (lastDigit !== 0) {
      amount++
    }

    num = Math.floor(num / 10) // remove last digit
  }

  return amount + '#' + sum
}

function groupNumbers(nums) { // [123, 321, 303]
  let groups = {} // {3#6: [123, 321]

  for (let num of nums) { // 321
    let key = getHash(num) // 2#6

    if (!groups[key]) {
      groups[key] = []
    }

    groups[key].push(num)
  }

  return Object.values(groups)
}