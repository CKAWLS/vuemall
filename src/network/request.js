import axios from "axios";

export function request1 (config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    //...操作
    return config
  }, error => {})
  instance.interceptors.response.use(res =>  {
    //...操作
    return res.data
  }, error => {})

  return instance(config)
}

