import { combineReducers } from 'redux';
import authReducer from './authReducer';
import messageReducer from './messageReducer';

export default combineReducers({
     auth: authReducer,
    // register: registerReducer,
     message: messageReducer,
    // user: userReducer,
    // users: usersReducer,
  });
  