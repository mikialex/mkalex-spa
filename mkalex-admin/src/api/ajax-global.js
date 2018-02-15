import axios from 'axios'
import { baseURL } from '@/api/config'

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


function getToken() {
  let token = localStorage.getItem('token');
  return token;
}

function addToken(p) {
  let payload = p;
  if (payload) {
    payload.token = getToken();
  } else {
    payload = { token: getToken() };
  }
  return payload;
}
  
export async function  ajax(method, url, payload) {
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

export async function get(url, payload) {
  return axios.get(baseURL + url, {params: payload})
  .then(data => {
    console.info('get original data',data)
    return data.data
  })
}

export async function getAuth(url, payload) {
  const d = await axios.get(baseURL + url, { params: addToken(payload) });
  console.info('auth get ' + url, d)
  return d.data;
}

export async function patch(url, payload) {
  return await axios.patch(baseURL + url, { params: addToken(payload)})
  .then(data => {
    console.info('get original data', data);
    if (data.data.result === 'success') {
      return data.data
    } else if (data.data.result === 'authfail') {
      window.location = '/#/login'
      throw 'authfail'
    }
  })
}

export async function del(url, payload) {
  return await axios.delete(baseURL + url, { params: addToken(payload)})
  .then(data => {
    console.info('delete response data', data)
    if (data.data.result === 'success') {
      return data.data
    } else if (data.data.result === 'authfail') {
      window.location = '/#/login'
      throw 'authfail'
    }
  })
}


export async function post(url, payload) {
  return await axios.post(baseURL + url, addToken(payload))
    .then(data => {
      if (data.data.result === 'success') {
        return data.data
      } else if (data.data.result === 'authfail') {
        window.location = '/#/login'
        throw 'authfail'
      }
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
  articleListAdmin: 'articles/admin',

  articleTagList:'articles/tags',
  articleTag:'articles/tag',
  articleDetial: 'articles/article',
  articleDetialAdmin: 'articles/article/admin',
  
  
  tagList: 'tags',
  tag:'tags/tag',
  
  login:'login'
}