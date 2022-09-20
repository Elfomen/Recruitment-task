import axios from "axios";

const event = axios.create({
    baseURL: 'http://localhost:5000/' , 
    headers: {
        contentType: 'application/json' 
    }
})

export default event