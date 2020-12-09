import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080'});


api.auth = {
    auth: { 
       username: 'user', 
       password: 'admin' 
    }
}    

export default api;
