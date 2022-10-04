function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      const callback = (error, data) => {
        if (error) return reject(error)
        else return resolve(data)
      }

      fn.call(this, ...args, callback)
    })
  }
}

const promisedFunc = promisify(func)