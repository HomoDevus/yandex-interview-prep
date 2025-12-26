// filter([null, false, '', 1]) -> [1]
// filter({'a': 2, b: null, c: [1, 2, null]}) -> {'a': 2, c: [1, 2]}
// Use recursion. Make two branches for array and object. Can check that it's object with typeof.
// typeof null returns 'object'. Don't forget to handle this case.

function filter(item) {
    if (item === null) return null

    if (typeof item === 'object') {
        if (Array.isArray(item)) {
            return item.filter(arrayItem => filter(arrayItem))
        } else {
            return Object.entries(item).reduce((acc, [key, value]) => {
                const filteredItem = filter(value)

                if (filteredItem) {
                    acc[key] = filteredItem
                }

                return acc
            }, {})
        }
    }

    return item
}

console.log(filter([null, false, '', 1]))
console.log(filter({'a': 2, b: null, c: [1, 2, null]}))