import userConstant from "../constants/userConstant";
import history from "../helpers/history";
import userAPI from '../api/userApi'
import toastConstant from '../constants/toastConstant'
import showToast from '../components/toast/showToast'
import Messages from '../constants/Messages';
const CODE_LOGIN_FALSE = 401;


export function getUserSuccess(data){
    return {
        type :userConstant.GET_USER_SUCCESS,
        data
    };
}

export function getUserFailure(error){
    return {
        type :userConstant.GET_USER_FAILURE,
        error
    };
}

export function loginSuccess(data){
    return {
        type :userConstant.LOGIN_SUCCESS,
        data
    };
}

export function loginFailure(error){
    return {
        type :userConstant.LOGIN_FAILURE,
        error
    };
}

export function logoutAction(){
    return {
        type :userConstant.LOGOUT
    };
}



export function getUser(){
    return (dispatch) => {
        userAPI.getUser().then(
            (res) => {
                if (res.data.code == 200 || res.data.data != null) {
                    dispatch(getUserSuccess(res.data.data));
                }
                if(res.data.data == null || res.data.data == ''){
                    history.push('/401');
                }
            },
            (err) => {
                console.log("error get user data");
                dispatch(getUserFailure(err));
            }
        )
    };
}

export function refreshAction(data){
    return (dispatch) => {
        localStorage.removeItem('user');
        localStorage.setItem('user', JSON.stringify(data));
        dispatch(getUserSuccess(data));
    };
}

export function login(params){
    return (dispatch) => {
        userAPI.login(params).then(
            (res) => {
                if (!res.data.data.code) {
                    localStorage.setItem('user', JSON.stringify(res.data.data));
                    dispatch(loginSuccess(res.data.data));
                    history.push('/');
                    //showToast("get user successful",toastConstant.SUCCESS);
                }else {
                    dispatch(loginFailure(res.data.data.message));
                    let errCode = res.data.data.code;
                        switch (errCode) {
                            case CODE_LOGIN_FALSE:
                                showToast(Messages.ACOUNT_MSG.WRONG_ACCOUNT ,toastConstant.ERROR);
                                break;
                            default:
                                showToast('Lỗi hệ thống' ,toastConstant.ERROR);
                                break;
                        }
                }
                
            },
            (error) => {
                console.log("error get user data");
                dispatch(loginFailure(error));
                showToast(error.toString() ,toastConstant.ERROR);
            }
        )
    };
}

export function register(params){
    return (dispatch) => {
        userAPI.register(params).then(
            (res) => {
                if (res && res.data.data === true) {
                    history.push('/login');
                    showToast("Registration successful",toastConstant.SUCCESS);
                }else {
                    showToast(res.data.message ,toastConstant.ERROR);
                }
            },
            (error) => {
                console.log("error get user data");
                showToast(error.toString() ,toastConstant.ERROR);
            }
        )
    };
}



export function logout() {
    localStorage.removeItem('user');
    return (dispatch) => {
        dispatch(logoutAction());
    };
    
}