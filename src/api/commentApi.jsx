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

const commentAPI = { instance: getInstance() };


commentAPI.commentCreate = (params) => {
    return commentAPI.instance.post('/tutorialComment/create', params)
}

commentAPI.commentFilter = (params) => {
    return commentAPI.instance.get('/tutorialComment/show/filter?'+params)
}

commentAPI.commentDelete = (commentId) => {
    return commentAPI.instance.get('/tutorialComment/delete/'+commentId)
}



export default commentAPI;

