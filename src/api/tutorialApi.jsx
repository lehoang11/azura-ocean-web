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

const TutorialAPI = { instance: getInstance() };


TutorialAPI.getTutorialList = () => {
    return TutorialAPI.instance.get('/tutorial/show/list')
}

TutorialAPI.getTutorialById = (tutorialId) => {
    return TutorialAPI.instance.get('/tutorial/show/'+tutorialId)
}

TutorialAPI.getListTutorialByEduId = (eduId) => {
    return TutorialAPI.instance.get('/tutorial/show/eduId/'+eduId)
}

TutorialAPI.updateView = (id) => {
    return TutorialAPI.instance.get('/tutorial/updateView?id='+id)
}

TutorialAPI.create = (params) => {
    return TutorialAPI.instance.post('/tutorial/create', params)
}

export default TutorialAPI;

