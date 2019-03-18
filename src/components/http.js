import axios from 'axios'
import { Message } from 'element-ui'
axios.defaults.withCredentials = true
axios.defaults.timeout = 8000
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
    .catch(function (e) {
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
    .catch(function (e) {
      Message.error('网络错误,请重试')
    })
}
