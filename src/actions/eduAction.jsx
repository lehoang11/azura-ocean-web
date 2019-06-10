import EduConstant from '../constants/eduConstant'
import eduAPI from '../api/eduApi'
import history from "../helpers/history";

export function eduGetSuccess(data){
    return {
        type :EduConstant.EDU_GET_SUCCESS,
        data
    };
}

export function eduGetFailure(error){
    return {
        type :EduConstant.EDU_GET_FAILURE,
        error
    };
}

export function getEduByLink(eduShortName){
    return (dispatch) => {
         eduAPI.getEduByLink(eduShortName).then(
            (res) => {
                if (res.data.code == 200 || res.data.data != null) {
                    dispatch(eduGetSuccess(res.data.data));
                }
                
                if(res.data.data == null || res.data.data == ''){
                    history.push('/401');
                }
            },
            (err) => {
                console.log("error get edu data");
                dispatch(eduGetFailure(err));
            }
        )
    }

}