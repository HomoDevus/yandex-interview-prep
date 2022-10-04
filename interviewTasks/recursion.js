function recursion(n) { // 3
  if (n !== 0) {
    console.log('yes') // 3, 2, 1, 0
    return recursion(n - 1)
  }
}

recursion(3)