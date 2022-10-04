function set(obj, path, value) {
  if (typeof path === "string") {
    path = path.replace('[', '.')
    path = path.replace(']', '')
    path = path.split('.')
  }

  let currPosition = obj

  for (let i = 0; i < path.length; i++) {
    let property = path[i]

    if (i === path.length - 1) {
      currPosition[property] = value
      break
    }

    if (!currPosition[property]) {
      if (i + 1 < path.length && String((Number(path[i + 1]))) === path[i + 1]) {
        currPosition[property] = []
      } else {
        currPosition[property] = {}
      }
    }

    currPosition = currPosition[property]
  }
}

const obj = {
  a: {
    b: {
      c: [1,2,3]
    }
  }
}

set(obj, 'a.c.d[0]', 'BFE')
console.log(obj.a.c.d)