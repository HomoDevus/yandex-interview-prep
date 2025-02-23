const graph = {'A': ['B', 'D'], 'B': ['C', 'N', 'Z'], 'D': ['E', 'F'], 'F': ['S']}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function fetchFlights(from) {
  await sleep(500)

  return graph[from]
}

function findPath(from, to, fetchFlights) { // A, N
  const activeFlights = new Set() // { -A

  return new Promise((resolve, reject) => (function fly(positions, path) { // [B, D], A
    if (positions.includes(to)) {
      resolve((path + to).split())
    }

    for (let position of positions) { // A
      let flightCode = path + '-' + position; // -A
      activeFlights.add(flightCode);
      fetchFlights(position).then((response) => { // [B, D]
        if (response) {
          fly(response, path + position);
        }
        activeFlights.delete(flightCode);
        if (activeFlights.size === 0) reject("No way");
      })
    }
  })([from], ''))
}

findPath('A', 'N', fetchFlights).then(console.log).catch(console.error)
findPath('A', 'S', fetchFlights).then(console.log).catch(console.error)
findPath('B', 'S', fetchFlights).then(console.log).catch(console.error)
