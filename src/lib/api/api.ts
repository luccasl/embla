import axios from 'axios'

const api = axios.create({
    baseURL: 'https://embla-mock-server.herokuapp.com'
})

export { api }