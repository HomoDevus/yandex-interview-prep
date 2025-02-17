// Обращение к свойству объекта
/*
const o = {
  a: {
    b: {},
    c: 42
  },
  z: null
};
(o, 'a.c') => 42
(o, 'a.d') => undefined
(o, 'z') => null
*/

function getByProperty(obj, path) {
  let splitPath = path.split('.')
  let currPos = obj

  for (let i = 0; i < splitPath.length; i++) {
    currPos = currPos[splitPath[i]]
  }

  return currPos
}

const o = {
  a: {
    b: {},
    c: 42
  },
  z: null
};

console.log(getByProperty(o, 'a.c'))
console.log(getByProperty(o, 'a.d'))
console.log(getByProperty(o, 'z'))