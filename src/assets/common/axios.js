import Axios from 'axios'

export const service = Axios.create({
  // 测试环境
  baseURL: 'http://10.100.24.65:8000/',
  timeout: 100000
})
