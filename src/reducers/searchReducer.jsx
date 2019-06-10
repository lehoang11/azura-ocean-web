import SearchConstant from '../constants/searchConstant'

let initialState = {
    search: {
        success: false,
        isDone: false,
        q     : "",
        data : "",
    },
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SearchConstant.SEARCH_SUCCESS:
            return {
                ...state,
                search: {
                    success: true,
                    isDone: true,
                    q : action.q,
                    data : action.data
                }
            };
        case SearchConstant.SEARCH_FAILURE:
            return {
                ...state,
                search: {
                    success: false,
                    isDone: false,
                    q : action.q,
                    data : action.error
                }
            };
        default:
            return state;
    }
};

export default searchReducer;
