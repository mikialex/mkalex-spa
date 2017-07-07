import axios from 'axios'
import {baseURL} from '@/api/config'
  
export function ajax(method, url, payload) {
  if (method === 'get' || method === 'post') {
    return axios({
      method: method,
      url: url,
      data: payload,
    })
  } else {
    throw 'method:${method} do not support'
  }
}

export function get(env, url, payload) {
  env.$store.commit('add_GoingAjax')
  return ajax('get', baseURL + url, payload)
  .catch(err => {
    console.log(err)
    throw err
  })
  .then(data => {
    env.$store.commit('minus_GoingAjax')
    console.info('get original data',data)
    return data.data
  })
}


export function post(env, url, payload) {
  env.$store.commit('add_GoingAjax')
  return ajax('post', url, payload)
}


export function handleErr(env) {
  return (function (err) {
    env.$store.commit('setErrMessage', { message: 'network request error'+err })
  }).bind(env)
}