import axios from "axios"

const
  URL = process.env.NODE_ENV === 'production' ?
    'http://todo-public-server-url' :
    'http://localhost:3001'

export default {
  logonUser(credentials) {
    const endpoint = `${URL}/api/login`
    return axios.post(endpoint, credentials)
  },

  registerUser(credentials) {
    const endpoint = `${URL}/api/register`
    return axios.post(endpoint, credentials)
  },

  getAllEvents() {
    const endpoint = `${URL}/api/events`
    return axios.get(endpoint)
  },

  getEvent(eventId) {
    const endpoint = `${URL}/api/event/${eventId}`
    return axios.get(endpoint)
  },

  addEvent(event) {
    const endpoint = `${URL}/api/event`
    return axios.post(endpoint, event)
  },

  addComment(comment) {
    const endpoint = `${URL}/api/comment`
    return axios.post(endpoint, comment)
  }
}