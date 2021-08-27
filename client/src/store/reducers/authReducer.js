import {
  ME_SUCCESS,  
  ME_FAIL
} from "../types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: false,
  me: null,
  error: null,
  appLoaded: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ME_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        me: payload.me,
        error: null,
        appLoaded: true,
      };
      case ME_FAIL:
        localStorage.removeItem('token');
        return {
          ...state,
          isAuthenticated: false,
          isLoading: false,
          me: null,
          error: null,
          appLoaded: true,
        };
    default:
      return state;
  }
};
export default authReducer;
