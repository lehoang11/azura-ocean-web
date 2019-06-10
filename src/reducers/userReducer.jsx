import  userConstant  from '../constants/userConstant';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstant.LOGIN_SUCCESS:
            return {
                loggingIn: true,
                user: action.data
            };
        case userConstant.LOGIN_FAILURE:
            return {
                loggingIn: false,
                user: ''
            };
        case userConstant.GET_USER_SUCCESS:
            return {
                loggingIn: true,
                user: action.data
            };
        
        case userConstant.GET_USER_FAILURE:
            return {
                loggingIn: false,
                user: ''
            };
        default:
            return state;
    }
};

export default userReducer;
