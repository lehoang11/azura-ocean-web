import axios from 'axios';
import * as AccessTokenInterceptor from './interceptors/accessToken';
// Set config defaults when creating the instance

const getInstance = () => {
    const instance = axios.create({
        baseURL: 'http://localhost:8888/api',
        timeout: 30000,
        crossdomain: true ,
    });

    instance.interceptors.request.use(
        AccessTokenInterceptor.addAccessToken,
        AccessTokenInterceptor.onRejected
    );
    
    return instance;
}

const userAPI = { instance: getInstance() };


userAPI.getUser = () => {
    return userAPI.instance.get('/getUserInfo')
}

userAPI.login = (params) => {
    return userAPI.instance.post('/user/login',params)
}

userAPI.register = (params) => {
    return userAPI.instance.post('/user/signup',params)
}

userAPI.update = (params) => {
    return userAPI.instance.post('/user/update',params)
}


export default userAPI;

