import axios from 'axios'

export const loginAPI = data =>
  axios.post('https://reqres.in/api/register', data)
