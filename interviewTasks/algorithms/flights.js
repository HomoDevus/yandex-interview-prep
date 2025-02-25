const graph = {'A': ['B', 'D'], 'B': ['C', 'N', 'Z'], 'D': ['E', 'F'], 'F': ['S']}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function fetchFlights(from) {
  await sleep(500)

  return graph[from]
}

function findPath(from, to, fetchFlights) { // A, N
  let activeFlights = 0

  return new Promise((resolve, reject) => (function fly(positions, path) { // [B, D], A
    if (positions.includes(to)) {
      resolve((path + to).split())
    }

    for (let position of positions) { // A
      activeFlights++
      fetchFlights(position).then((response) => { // [B, D]
        if (response) {
          fly(response, path + position);
        }

        activeFlights--
        if (activeFlights === 0) reject("No way");
      })
    }
  })([from], ''))
}

// A better solution would be to build map during our flights and in the end finding the path we came by using this map.
// This allows us not to store many repetition of paths

findPath('A', 'N', fetchFlights).then(console.log).catch(console.error)
findPath('A', 'S', fetchFlights).then(console.log).catch(console.error)
findPath('B', 'S', fetchFlights).then(console.log).catch(console.error)
