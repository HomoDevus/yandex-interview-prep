function inBetween(start, finish) {
  return function(num) {
    return num >= start && num <= finish
  }
}

function inArray(arr) {
  return function(num) {
    return arr.includes(num)
  }
}

/* .. ваш код для inBetween и inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2