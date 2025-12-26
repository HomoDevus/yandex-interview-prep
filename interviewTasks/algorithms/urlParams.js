console.log(urlParams({a: 1, b: 2})) // a=1&b=2
console.log(urlParams({a: 'пиво'})) // a=%D0%BF%D0%B8%D0%B2%D0%BE
console.log(urlParams({a: [1, 2]})) // a=1&a=2
console.log(urlParams({a: undefined}))

// function urlParams(obj) {
//     return Object.entries(obj).reduce((acc, [key, val]) => {
//         if (!val) return acc

//         if (Array.isArray(val)) {
//             return acc.concat(val.map((itemVal => `${key}=${encodeURI(itemVal)}`)))
//         } else {
//             return acc.concat(`${key}=${encodeURI(val)}`)
//         }
//     }, []).join('&')
// }

function urlParams(obj) {
    const params = new URLSearchParams()

    for (let [key, val] of Object.entries(obj)) {
        if (val === undefined) continue

        if (Array.isArray(val)) {
            for (let valItem of val) {
                params.append(key, valItem)
            }
        } else {
            params.append(key, val)
        }
    }

    return params.toString()
}

// function urlParams(obj) {
//     return new URLSearchParams(Object.entries(obj).reduce((acc, [key, val]) => {
//         if (val === undefined) return acc

//         if (Array.isArray(val)) {
//             for (let valItem of val) {
//                 acc[Symbol(key)] = valItem
//             }
//         } else {
//             acc[key] = val
//         }

//         return acc
//     }, {})).toString()
// }