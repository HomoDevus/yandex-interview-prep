function excludeItems(items, excludes) {
  const excludesObj = arrayToObject(excludes)

  let filteredItems = items.filter(item => {
    for (let [itemKey, itemValue] of Object.entries(item)) {
      if (excludesObj[itemKey] && excludesObj[itemKey].includes(itemValue)) {
        return false
      }
    }

    return true
  })

  return filteredItems
}

function arrayToObject(arr) {
  let obj = {}

  for (let item of arr) {
    if (!obj[item.k]) {
      obj[item.k] = []
    }

    obj[item.k].push(item.v)
  }

  return obj
}