import axios from "axios"

const
  URL = process.env.NODE_ENV === 'production' ?
    '' :
    'http://localhost:3001'

//axios.defaults.withCredentials = true

export default {
  isAuthenticated() {
    const endpoint = `${URL}/api/auth`
    return axios.get(endpoint, {withCredentials: false})
  },

  logonUser(credentials) {
    const endpoint = `${URL}/api/login`
    return axios.post(endpoint, credentials, {withCredentials: false})
  },

  logoutUser() {
    const endpoint = `${URL}/api/logout`
    return axios.post(endpoint)
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

  deleteEvent(eventId) {
    const endpoint = `${URL}/api/event/${eventId}`
    return axios.delete(endpoint)
  },

  addComment(comment) {
    const endpoint = `${URL}/api/comment`
    return axios.post(endpoint, comment)
  },

  deleteComment(commentId) {
    const endpoint = `${URL}/api/comment/${commentId}`
    return axios.delete(endpoint)
  }
}