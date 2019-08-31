import axios from 'axios';
import authHeader from '../helpers/auth-header';

// Set config defaults when creating the instance

const getInstance = () => {
    const instance = axios.create({
        baseURL: 'http://localhost:8888/api',
        timeout: 30000,
    });
    return instance;
}

const SearchAPI = { instance: getInstance() };


SearchAPI.search = (params) => {
    return SearchAPI.instance.get('/search?'+ params)
}


export default SearchAPI;

