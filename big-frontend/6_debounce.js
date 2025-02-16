function debounce(fn, delay) {
  let timeoutId

  return function(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      fn(...args)
      timeoutId = null
    }, delay)
  }
}

let currentTime = 0

const run = (input) => {
  currentTime = 0
  const calls = []

  const func = (arg) => {
    console.log(`${arg}@${currentTime}`)
  }

  const debounced = debounce(func, 3)
  input.forEach((call) => {
    const [arg, time] = call.split('@')
    setTimeout(() => debounced(arg), time)
  })
  return calls
}

console.log(run(['A@0', 'B@2', 'C@3', 'D@10']))