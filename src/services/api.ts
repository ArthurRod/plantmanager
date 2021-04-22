import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333', //IMPORTANTE - Localhost só funcionará em um emulador
})                                    //caso utilizar o expo pelo celular utilizar o IP do computador                      
export default api;