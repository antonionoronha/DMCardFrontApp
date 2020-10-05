import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/solicitations/'
});

export default api;