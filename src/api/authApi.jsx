import  API_URL  from "../constants/apiConstant";
import API from "./API";
export default  {
    login,
    logout,
    register
};

function login(params) {
    let url = API_URL.USER_LOGIN_URL;
    return API.POST(url, params);
}

function logout(){
    localStorage.removeItem('user');
}

function register(params) {
    let url = API_URL.USER_REGISTER_URL;
    return API.POST(url, params);
}

