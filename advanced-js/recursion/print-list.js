let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printListCycle(list) {
  while (list !== null) {
    console.log(list.value)
    list = list.next
  }
}

function printListRecutsion(list) {
  console.log(list.value)
  if (list.next !== null) {
    printListRecutsion(list.next)
  }
}

function printListCycleReverse(list) {
  let values = []
  while (list !== null) {
    values.push(list.value)
    list = list.next
  }

  for (let i = values.length - 1; i >= 0; i--) {
    console.log(values[i])
  }
}

function printListRecursionReverse(list) {
  if (list !== null) {
    printListRecursionReverse(list.next)
    console.log(list.value)
  }
}

printListRecursionReverse(list)