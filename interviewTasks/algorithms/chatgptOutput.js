// Write chat gpt output module that will output symbol by symbol with delay.
// It should not store entire string all the time since it will be memory leak
// There is pretty solution with promise
// let pp = wrapper(outputCallback, delay)
// pp('abc')
// pp('de')
// setTimeout(() => pp('ff'), 100)
