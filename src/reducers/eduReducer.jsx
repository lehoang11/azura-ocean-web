import EduConstant from '../constants/eduConstant'

let initialState = {
    edu: {
        success: false,
        isDone: false,
        data: "",
    },
}

const eduReducer = (state = initialState, action) => {
    switch (action.type) {
        case EduConstant.EDU_GET_SUCCESS:
            return {
                ...state,
                edu: {
                    success: true,
                    isDone: true,
                    data: action.data
                }
            };
        case EduConstant.EDU_GET_FAILURE:
            return {
                ...state,
                edu: {
                    success: false,
                    isDone: true,
                    data: action.error
                }
            };
        default:
            return state;
    }
};

export default eduReducer;
