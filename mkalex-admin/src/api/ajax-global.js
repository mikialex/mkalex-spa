import axios from 'axios'
import { baseURL } from '@/api/config'

axios.defaults.timeout = 15000;
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
  
export async function ajax(method, url, options) {
    return await axios({
      method: method,
      url: url,
      ...options
    })
}

export async function get(url, params) {
  const data = await ajax('get', baseURL + url, { params: params })
  console.info('normal get ' + url, data)
  return data.data;
}

export async function getAuth(url, params) {
  const data = await ajax('get', baseURL + url, { params: addToken(params) })
  console.info('auth get ' + url, data)
  return data.data;
}


export async function post(url, payload, params, options) {
  const data = await ajax('post', baseURL + url,
    { params: addToken(params), data: payload, ...options });
  console.info('post ' + url, data)
  if (data.data.result === 'authfail') {
    window.location = '/#/login'
    throw 'authfail'
  }
  return data.data;
}

export async function patch(url, payload, params, options) {
  const data = await ajax('patch', baseURL + url,
    { params: addToken(params), data: payload, ...options });
  console.info('patch ' + url, data);
  if (data.data.result === 'authfail') {
    window.location = '/#/login'
    throw 'authfail'
  }
  return data.data;
}

export async function del(url, params) {
  const data = await ajax('delete', baseURL + url, { params: addToken(params) })
  console.info('delete ' + url, data)
  if (data.data.result === 'authfail') {
    window.location = '/#/login'
    throw 'authfail'
  }
  return data.data;
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
  articleTag: 'articles/tag',
  articleDetial: 'articles/article',
  articleDetialAdmin: 'articles/article/admin',
  
  imageList:'images',
  image:'images/image',
  
  tagList: 'tags',
  tag:'tags/tag',
  
  login:'login'
}