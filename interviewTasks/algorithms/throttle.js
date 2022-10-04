function throttle(fn, delay) {
  let isThrottle = false
  let lastFn

  return function(...args) {
    if (!isThrottle) {
      isThrottle = true
      setTimeout(() => {
        isThrottle = false
        if (lastFn) {
          lastFn()
          lastFn = undefined
        }
      }, delay)
      return fn(...args)
    } else {
      lastFn = fn.bind(this, ...args)
    }
  }
}

function testFn(message) {console.log(message)}

let throttled = throttle(testFn, 1000)

for (let i = 0; i < 10; i++) {
  throttled(i)
}

throttled('test')

setTimeout(() => throttled(11), 2000)