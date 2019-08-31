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

const likeAPI = { instance: getInstance() };


likeAPI.LikeCreate = (params) => {
    return likeAPI.instance.post('/tutorialLike/create', params)
}

likeAPI.likeCheckHasUser = (params) => {
    return likeAPI.instance.get('/tutorialLike/check?'+params)
}

likeAPI.likeDelete = (id) => {
    return likeAPI.instance.get('/tutorialLike/delete/'+id)
}



export default likeAPI;

