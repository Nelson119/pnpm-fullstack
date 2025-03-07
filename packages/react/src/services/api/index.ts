import axios from 'axios'

const request = axios.create({
  baseURL: '/api', // 指向你的後端 API
  headers: {
    'Content-Type': 'application/json',
  },
  // 如果需要跨域傳送 cookie，可加上:
  // withCredentials: true,
})

// 這裡也可以加入攔截器 (interceptors)，例如:
request.interceptors.request.use((config) => {
  // 例如可在此加入 token
  // config.headers.Authorization = `Bearer ${token}`
  return config
})

request.interceptors.response.use(
  (response) => response,
  (error) => {
    // 可在此處理錯誤，如跳轉登入、彈出通知等
    return Promise.reject(error)
  }
)

export default request
