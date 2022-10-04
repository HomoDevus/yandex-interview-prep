function checkError(response) {
  if (response.status >= 200 && response.status <= 299) {
    return response.json();
  } else {
    throw Error(response.statusText);
  }
}

async function refetch(url, attempts) {
  async function getData() {
    let res = await fetch(url)
    res = await checkError(res)
    return res
  }

  try {
    return await getData()
  } catch (e) {
    if (attempts > 0) {
      return await refetchImproved(url, attempts - 1)
    } else {
      console.error(e)
    }
  }
}

refetch('https://mock.codes/200', 4).then(res => console.log(res))