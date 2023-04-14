function fakeRequest(res, isError = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isError) {
        reject()
      } else {
        resolve(res)
      }
    }, 300)
  })
}

function getAuth() {
  return fakeRequest('auth')
}

function getUsers(token) {
  return fakeRequest('user', true)
}

function getOrders(token, userId) {
  return fakeRequest('orders')
}

function getMode(token) {
  return fakeRequest('mode')
}

async function makeRequests() {
  let users, mode, orders
  const token = await getAuth()

  try {
    // [[orders, users], mode] = await Promise.all([
    //   getUsers(token).then(userId => getOrders(userId, mode).then(orders => [orders, userId])),
    //   getMode(token)
    // ])

    // Если падает первый элемент в Promise.allSettled, то object destructuring тоже падает с ошибкой
    // [[orders, users], mode] = await Promise.allSettled([
    //   getUsers(token).then(userId => getOrders(userId, mode).then(orders => [orders, userId])),
    //   getMode(token)
    // ]).then(res => res.map(resItem => resItem.value))


    [users, mode] = await Promise.allSettled([
      getUsers(token),
      getMode(token)
    ]).then(res => res.map(resItem => resItem.value))

    if (users) {
      orders = await getOrders(users)
    }
  } catch (e) {
    console.log(e)
  }

  return { orders, users, mode, token }
}

makeRequests().then((res) => console.log(res))
