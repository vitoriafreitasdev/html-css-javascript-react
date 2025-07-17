
// para configuração do axios

import axios from 'axios'
// config de um objeto global, para reaproveitar a base URL e ainda configurar outros tipos de dados nas requisições
const blogFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json"
    }
})

export default blogFetch