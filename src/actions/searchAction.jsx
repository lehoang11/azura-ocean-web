import SearchConstant from '../constants/searchConstant'
import searchAPI from '../api/searchApi'
import history from "../helpers/history";

export function searchSuccess(q, data){
    return {
        type :SearchConstant.SEARCH_SUCCESS,
        q,
        data
    };
}

export function searchFailure(q, error){
    return {
        type :SearchConstant.SEARCH_FAILURE,
        q,
        error
    };
}

export function search(q){
    return (dispatch) => {
        searchAPI.search(q).then(
            (res) => {
                if (res.data.code == 200) {
                    dispatch(searchSuccess(q, res.data.data));
                }
            },
            (err) => {
                console.log("error get  data");
                dispatch(searchFailure(q, err));
            }
        )
    }

}