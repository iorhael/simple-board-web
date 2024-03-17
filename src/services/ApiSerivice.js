const BASE_PATH = process.env.REACT_APP_API_URL

const ApiService = {
  get: (endpoint) =>
    fetch(`${BASE_PATH}/${endpoint}`, {
      method: "GET",
      mode: "cors",
    }).catch((err) => console.log(err)),
  post: (endpoint, body) =>
    fetch(`${BASE_PATH}/${endpoint}`, {
      method: "POST",
      mode: "cors",
      body: body && JSON.stringify(body),
    }).catch((err) => console.log(err)),
  put: (endpoint, body) =>
    fetch(`${BASE_PATH}/${endpoint}`, {
      method: "PUT",
      mode: "cors",
      body: body && JSON.stringify(body),
    }).catch((err) => console.log(err)),
  delete: (endpoint) =>
    fetch(`${BASE_PATH}/${endpoint}`, {
      method: "DELETE",
      mode: "cors",
    }).catch((err) => console.log(err)),
}

export default ApiService
