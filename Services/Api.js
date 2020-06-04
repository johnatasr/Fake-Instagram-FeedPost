import axios from 'axios';


const api = axios.create({
    baseURL: 'https://instaflaskfake.herokuapp.com/'
})

export default api ;