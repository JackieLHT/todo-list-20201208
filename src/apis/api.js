import axios from 'axios';

 const api = axios.create({
    baseURL: "https://5fd084271f23740016631c09.mockapi.io/api/"
})

export default api;