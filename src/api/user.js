import axios from 'axios'

export const loginAPI = data =>
  axios.post('http://localhost:3003/api/v1/user/login', data)

export const signupAPI = data =>
  axios.post('http://localhost:3003/api/v1/user/regist', data)
