import axios from 'axios'
import router from '@/router'
import { MessageBox, Message } from 'element-ui'

import { showLoading, hideLoading } from '@/utils/loading'
import store from '@/store'
import { getToken, clearAll } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL: 'https://leju.bufan.cloud',
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // 在请求体和请求头做一些操作
    showLoading() // 开启loading
    const token = getToken()
    if (token) {
      config.headers['token'] = token
    }
    return config
  },
  error => {
    // do something with request error
    hideLoading()
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    hideLoading() // 关闭loading
    if (res.code === 20002) {
      // Message({
      //   message: res.message,
      //   type: 'error',
      //   duration: 3 * 1000
      // })
      // this 不是vue
      clearAll()
      router.push('/login')
    }
    return res
  },
  error => {
    console.log('err' + error) // for debug
    hideLoading() // 关闭loading
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
