import axios from 'axios'
import { Message } from 'element-ui'

// 设置默认参数
axios.defaults.withCredentials = true
axios.defaults.timeout = 8000 // 临时改成8s，正在优化，优化结束后会恢复5s
// axios.defaults.headers['Dahai-Access-Token'] = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).access_token : ''

/**
 * 封装post请求,注入公用参数
 *
 * @param {string} url - 请求地址
 * @param {Object} data - 数据
 * @returns
 */

export const httpPost = (url, data = {}) => {
  return axios
    .post(url, data)
    .then(res => {
      if (!res.data.status) {
        if (res.data.error_code === -5001) {
          window.location.pathname = '/auth'
          localStorage.removeItem('userInfo')
        }
        Message.error(res.data.message)
        return res
      } else {
        return res
      }
    })
    .catch(function(e) {
      Message.error('网络错误,请重试')
    })
}
export const httpGet = url => {
  return axios
    .get(url)
    .then(res => {
      if (!res.data.status) {
        Message.error(res.data.message)
        return res
    } else {
    return res
  }
    })
    .catch(function(e) {
      Message.error('网络错误,请重试')
    })
}
