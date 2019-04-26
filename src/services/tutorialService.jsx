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

const TutorialAPI = { instance: getInstance() };


TutorialAPI.getTutorialList = () => {
    return TutorialAPI.instance.get('/tutorial/show/list')
}

TutorialAPI.getTutorialById = (tutorialId) => {
    return TutorialAPI.instance.get('/tutorial/show/'+tutorialId)
}

export default TutorialAPI;

