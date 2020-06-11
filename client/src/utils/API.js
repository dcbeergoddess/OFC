import axios from "axios"

const
  URL = process.env.NODE_ENV === 'production' ?
    'http://todo-public-server-url' :
    'http://localhost:3001'

export default {
  logonUser(credentials) {
    const endpoint = `${URL}/api/login`
    return axios.post(endpoint, credentials, {crossdomain: true})
  },

  registerUser(credentials) {
    const endpoint = `${URL}/api/register`
    return axios.post(endpoint, credentials, {crossdomain: true})
  }
}