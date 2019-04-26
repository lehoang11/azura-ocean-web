import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastConstant from '../../constants/toastConstant'


export default function showToast(msg, type){
    switch (type) {
        case toastConstant.SUCCESS:
            ShowSuccess(msg);
            break;
        case toastConstant.INFO:
            ShowInfo(msg);
            break;
        case toastConstant.WARN:
            ShowWarn(msg);
            break;
        case toastConstant.ERROR:
            ShowError(msg);
            break;
        default:
            break;
    }

    function ShowSuccess (msg = ''){
        toast.success(msg);
    }
    function ShowInfo (msg = ''){
        toast.info(msg);
    }
    function ShowWarn (msg = ''){
        toast.warn(msg);
    }
    function ShowError (msg = ''){
        toast.error(msg);
    }

}




