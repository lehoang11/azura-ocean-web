import userConstant from "../constants/userConstant";
import userService from "../services/userService";
import alertAction from "./alertAction";
import history from "../helpers/history";
import Messages from '../constants/Messages';
const CODE_LOGIN_FALSE = 401;

export default {
    login,
    logout,
    register
};

function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));

        userService.login(email, password)
            .then(
                res => {
                    if(!res.data.code){
                        console.log("Login info success");
                        // save token here
                        localStorage.setItem('user', JSON.stringify(res.data));
                        dispatch(success(res.data));
                        history.push('/');
                    }else {
                        console.log("Login failure");
                        dispatch(failure(res.data.message));
                        let errCode = res.data.code;
                        switch (errCode) {
                            case CODE_LOGIN_FALSE:
                                dispatch(alertAction.error(Messages.ACOUNT_MSG.WRONG_ACCOUNT));
                                break;
                            default:
                            dispatch(alertAction.error("Lỗi hệ thống"));
                                break;
                        }
                    }
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertAction.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstant.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstant.LOGIN_SUCCESS, user } }
    function failure(error) {  return { type: userConstant.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstant.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                res => {
                    if (res && res.data === true) {
                        dispatch(success());
                        history.push('login');
                        dispatch(alertAction.success('Registration successful'));
                    }else {
                        dispatch(failure(res.message));
                        dispatch(alertAction.error(res.message));
                    } 
                    
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertAction.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstant.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstant.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstant.REGISTER_FAILURE, error } }
}
