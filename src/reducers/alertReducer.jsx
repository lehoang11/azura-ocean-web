import  alertConstant  from '../constants/alertConstant';
import { toast } from "react-toastify";
export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstant.SUCCESS:
    toast.success(action.message);
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertConstant.ERROR:
      toast.warn(action.message);
      return {
        type: 'alert-danger',
        message: action.message
      };
    case alertConstant.CLEAR:
      return {};
    default:
      return state
  }
}