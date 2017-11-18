import axios from 'axios'
import { baseURL } from '@/api/config'
import qs from 'qs'

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
  
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
  return axios.get(baseURL + url, {params: payload})
  //return ajax('get', baseURL + url, payload)
  // .catch(err => {
  //   console.log(err)
  //   throw err
  // })
  .then(data => {
    env.$store.commit('minus_GoingAjax')
    console.info('get original data',data)
    return data.data
  })
}

export function patch(env, url, payload) {
  env.$store.commit('add_GoingAjax')
  return axios.patch(baseURL + url, {params: payload})
  //return ajax('get', baseURL + url, payload)
  // .catch(err => {
  //   console.log(err)
  //   throw err
  // })
  .then(data => {
    env.$store.commit('minus_GoingAjax')
    console.info('get original data', data);
    if(data.data.result)
    return data.data
  })
}

export function del(env, url, payload) {
  env.$store.commit('add_GoingAjax')
  return axios.delete(baseURL + url, {params: payload})
  //return ajax('get', baseURL + url, payload)
  // .catch(err => {
  //   console.log(err)
  //   throw err
  // })
  .then(data => {
    env.$store.commit('minus_GoingAjax')
    console.info('get original data',data)
    return data.data
  })
}


export function post(env, url, payload) {
  env.$store.commit('add_GoingAjax')
  return axios.post(baseURL + url, payload)
    .then(data => {
      env.$store.commit('minus_GoingAjax')
      return data.data
    })
}


export function handleErr(env) {
  return (function (err) {
    console.error(err)
    // env.$store.commit('setErrMessage', { message: 'network request error'+err })
  }).bind(env)
}

export const apis = {
  articleList: 'articles',
  articleContent: 'articles/content',
  articleDetial:'articles/article',
  
  login:'login'
}