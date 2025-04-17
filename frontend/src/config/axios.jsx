import axios from 'axios'


export const axiosInstance = axios.create({
    baseURL: 'https://bloger-backend-zl84.onrender.com',
    // baseURL: 'http://localhost:3000',
})
