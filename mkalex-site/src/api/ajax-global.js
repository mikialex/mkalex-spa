import axios from 'axios'
import { baseURL } from '@/api/config'

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

function getToken(env) {
  let token = env.$store.state.token
  if (token !== '') {
    return token
  } else {
    token = localStorage.getItem('token');
  }
  if (token !== '' && token) {
    return token
  } else {
    throw 'token miss';
  }
}

export function ajax(method, url, payload) {
  if (method === 'get' || method === 'post') {
    return axios({
      method: method,
      url: url,
      data: payload,
    })
  } else {
    throw `method:${method} do not support`;
  }
}

export function get(env, url, payload) {
  env.$store.commit('add_GoingAjax')
  return axios.get(baseURL + url, { params: payload })
    .then(data => {
      env.$store.commit('minus_GoingAjax')
      console.info('get original data', data)
      return data.data
    })
}

export function getAuth(env, url, payload) {

  const token = getToken(env);
  payload = { ...payload, token }

  env.$store.commit('add_GoingAjax')
  return axios.get(baseURL + url, { params: payload })
    .then(data => {
      env.$store.commit('minus_GoingAjax')
      console.info('get original data', data)
      return data.data
    })
}

export function patch(env, url, payload) {
  env.$store.commit('add_GoingAjax')
  return axios.patch(baseURL + url, { params: payload })
    .then(data => {
      env.$store.commit('minus_GoingAjax')
      console.info('get original data', data);
      if (data.data.result === 'success') {
        return data.data
      } else if (data.data.result === 'authfail') {
        env.$router.push({ name: 'login' })
        throw 'authfail'
      }
    })
}

export function del(env, url, payload) {
  env.$store.commit('add_GoingAjax')
  return axios.delete(baseURL + url, { params: payload })
    .then(data => {
      env.$store.commit('minus_GoingAjax')
      console.info('get original data', data)
      if (data.data.result === 'success') {
        return data.data
      } else if (data.data.result === 'authfail') {
        env.$router.push({ name: 'login' })
        throw 'authfail'
      }
    })
}


export function post(env, url, payload) {
  env.$store.commit('add_GoingAjax')
  return axios.post(baseURL + url, payload)
    .then(data => {
      env.$store.commit('minus_GoingAjax')
      if (data.data.result === 'success') {
        return data.data
      } else if (data.data.result === 'authfail') {
        env.$router.push({ name: 'login' })
        throw 'authfail'
      }
    })
}


export const apis = {

  // get all public entity list
  articleList: 'articles',

  // get the entity content
  articleContent: 'articles/content',

  // get all entity list
  articleListAdmin: 'articles/admin',

  // get entitys tags list
  articleTagList: 'articles/tags',
  articleTag: 'articles/tag',
  articleDetial: 'articles/article',
  articleDetialAdmin: 'articles/article/admin',


  tagList: 'tags',
  tag: 'tags/tag',

  login: 'login'
}