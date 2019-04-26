import axios from 'axios';
import * as AccessTokenInterceptor from './interceptors/accessToken';

// Set config defaults when creating the instance

const getInstance = () => {
    const instance = axios.create({
        baseURL: 'http://localhost:8888/api',
        timeout: 30000,
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
eduAPI.getEduById = (id) => {
    return eduAPI.instance.get('/edu/show/id/'+id)
}

export default eduAPI;

