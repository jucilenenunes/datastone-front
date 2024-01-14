import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8181',
    headers: {
        'Origin': 'http://localhost:8080',
        'Content-Type': 'application/json',
        'Accept-Language': 'pt-BR'
    }
})

export default api;