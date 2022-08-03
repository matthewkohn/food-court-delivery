const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
}

const handleGET = async (url) => {
  const res = await fetch(url)
  return res.ok ? res.json() : console.log(res.statusText)
}

const handleDELETE = (url) => {
  return fetch(url, { method: "DELETE", headers })
}

const handleAPI = async (url, method, json) => {
  const res = await fetch(url, {
    method: method,
    headers,
    body: JSON.stringify(json)
  })
  return res.ok ? res.json() : console.log(res)
}

export { handleGET, handleDELETE, handleAPI }
