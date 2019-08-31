import { combineReducers } from 'redux';

import { registration } from './registrationReducer';
import { alert } from './alertReducer';
import  eduReducer  from './eduReducer'
import searchReducer from './searchReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  userReducer,
  registration,
  alert,
  eduReducer,
  searchReducer
});

export default rootReducer;