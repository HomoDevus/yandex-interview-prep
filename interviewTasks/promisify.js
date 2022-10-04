function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      const callback = (err, data) => {
        if (err) return reject(err)
        else return resolve(data)
      }

      return fn.call(this, ...args, callback)
    })
  }
}