// filter([null, false, '', 1]) -> [1]
// filter({'a': 2, b: null, c: [1, 2, null]}) -> {'a': 2, c: [1, 2]}
// Use recursion. Make two branches for array and object. Can check that it's object with typeof.
// typeof null returns 'object'. Don't forget to handle this case.