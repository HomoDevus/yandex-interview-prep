async function loadJson(url) {
    const res = await fetch(url)
    if (res.status === 200) {
      return await res.json()
    } else {
      throw new Error(res.status)
    }
}

loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404