import fetch from 'node-fetch'

function limitRequests(urls, limit, callback) {
  const responses = []
  let globIndex = 0

  return function makeRequest(locIndex) {
    if (!urls[locIndex]) return

    console.log(locIndex)
    new Promise((res) => setTimeout(() => res(), 1000)).then(res => {
      responses[locIndex] = new Date()
      limit++

      if (responses.length === urls.length) {
        return callback(responses)
      }

      return makeRequest(globIndex)
    })

    limit--
    globIndex++

    if (limit > 0) {
      return makeRequest(globIndex)
    }
  }(globIndex)
}

const requests = []

for (let i = 1; i < 10; i++) {
  requests.push('https://jsonplaceholder.typicode.com/users/' + i)
}

limitRequests(requests, 3, (res) => console.log(res))