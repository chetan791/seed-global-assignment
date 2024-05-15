import {
  LOADING,
  LOGINFAILURE,
  LOGOUT,
  SETROLE,
  STUDENTLOGINSUCCESS,
  UNIVERSITYLOGINSUCESS,
} from "../ActionTypes";

const initialState = {
  isAuth: false,
  token: "",
  name: "",
  role: "",
  email: "",
  error: "",
  isloading: false,
};

const AuthReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING:
      return {
        ...state,
        isloading: true,
      };
    case UNIVERSITYLOGINSUCESS:
      return {
        ...state,
        isloading: false,
        isAuth: true,
        token: payload.token,
        name: payload.name,
        email: payload.email,
      };
    case STUDENTLOGINSUCCESS:
      return {
        ...state,
        isloading: false,
        isAuth: true,
        token: payload.token,
        name: payload.name,
        email: payload.email,
        role: payload.role,
      };
    case LOGINFAILURE:
      return {
        ...state,
        error: payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        token: "",
        name: "",
        role: "",
        email: "",
        error: "",
        isloading: false,
        age: 0,
        gender: "",
        address: "",
        country: "",
        courses: [],
      };
    case SETROLE:
      return {
        ...state,
        role: payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
