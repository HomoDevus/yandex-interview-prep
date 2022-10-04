function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      const callback = (err, result) => {
        if (err) return reject(err)
        else return resolve(result)
      }
      fn.call(this, ...args, callback)
    })
  }
}