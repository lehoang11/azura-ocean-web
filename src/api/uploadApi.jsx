import axios from 'axios';

// Set config defaults when creating the instance

const getInstance = () => {
    const instance = axios.create({
        baseURL: 'http://localhost:5000',
        timeout: 30000,
        crossdomain: true ,
        headers: {
            'Content-Type' :'multipart/form-data',    
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE' ,
            'Access-Control-Allow-Credentials': 'true'
        },
    });
    


    return instance;
}

const uploadAPI = { instance: getInstance() };


uploadAPI.uploadImageDraft = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    return uploadAPI.instance.post('/upload/image/draft', formData)
}

uploadAPI.uploadImage = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    return uploadAPI.instance.post('/upload/image', formData)
}

uploadAPI.uploadVideo = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    return uploadAPI.instance.post('/upload/video', formData)
}




export default uploadAPI;

