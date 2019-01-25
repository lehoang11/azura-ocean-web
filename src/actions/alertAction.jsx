import alertConstant from "../constants/alertConstant";

export default {
    success,
    error,
    clear
};

function success (message) {
    return  {type :alertConstant.SUCCESS, message};
}

function error (message) {
    return {type :alertConstant.ERROR, message};
}

function clear (message) {
    return {type :alertConstant.CLEAR, message};
}