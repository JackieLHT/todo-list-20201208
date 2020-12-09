import axios from 'axios';

 const api = axios.create({
    baseURL: "https://5fd079a21f23740016631b10.mockapi.io/api"
})

export default api;