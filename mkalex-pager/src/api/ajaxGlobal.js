import axios from 'axios'

ajax(url, method, payload) {
  if (method === 'get' || method === 'post') {
    axios({
      method: method,
      url: url,
      data: payload,
    })
  } else {
    throw 'method:${method} do not support'
  }
}

get(url, payload) {
  return ajax('get', url, payload)
}

post(url, payload) {
  return ajax('post', url, payload)
}
