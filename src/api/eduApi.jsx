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

const eduAPI = { instance: getInstance() };


eduAPI.getEdu = (eduShortName, eduId) => {
    return eduAPI.instance.get('/edu/show/'+eduShortName+'-'+eduId)
}
eduAPI.eduCreate = (params) => {
    return eduAPI.instance.post('/edu/create', params)
}

eduAPI.eduUpdate = (params) => {
    return eduAPI.instance.post('/edu/update', params)
}

eduAPI.getEduById = (id) => {
    return eduAPI.instance.get('/edu/show/id/'+id)
}

eduAPI.getEduByLink = (link) => {
    return eduAPI.instance.get('/edu/show/'+link)
}

eduAPI.eduCheckExists = (link) => {
    return eduAPI.instance.get('/edu/show/exists/'+link)
}

eduAPI.getEduFollow = (params) => {
    return eduAPI.instance.get('/eduFollow/show/check?'+params)
}

eduAPI.getCountEduFollow = (params) => {
    return eduAPI.instance.get('/eduFollow/show/count?'+params)
}

eduAPI.eduFollow = (params) => {
    return eduAPI.instance.post('/eduFollow/follow', params)
}
eduAPI.eduUnFollow = (params) => {
    return eduAPI.instance.post('/eduFollow/unfollow', params)
}

eduAPI.getListEduFollow = (params) => {
    return eduAPI.instance.get('/edu/show/getListFollow?'+ params)
}

export default eduAPI;

