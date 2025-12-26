// Это массив
//
//   [{ from: A, to B }, {from: C, to: D} {from: B, to: C }]
//
// Про вывод не был в условии
//
// Он попросил массив тех же объектов в верном порядке
//
//   [{ from: A, to B }, {from: В, to: C} {from: C, to: D }]

// function findRoute(routes) {
//   let routesMap = new Map()
//   let from = routes[0].from;
//   let result = []

//   for (let route of routes) {
//     const {from, to} = route

//     routesMap.set(from, to)
//   }

//   for (let i = 0; i < routes.length; i++) {
//     result.push({from, to: routesMap.get(from)})
//     from = routesMap.get(from)
//   }

//   return result
// }

console.log(findRoute([{ from: 'A', to: 'B' }, {from: 'C', to: 'D'}, {from: 'B', to: 'C' }]))

function findRoute(routes) {
  const sortedRoute = []
  const routesMap = {}
  const starts = new Set()

  for (let route of routes) {
    starts.add(route.from)
    routesMap[route.from] = route.to
  }

  for (let route of routes) {
    starts.delete(route.to)
  }

  if (starts.size === 0) {
    throw Error('Loop')
  }

  const start = [...starts][0]

  sortedRoute.push({from: start, to: routesMap[start]})

  for (let to = sortedRoute.at(-1).to; routesMap[to]; to = routesMap[to]) {
    sortedRoute.push({from: to, to: routesMap[to]})
  }

  return sortedRoute
}