import axios from "axios";
import {
  LOADING,
  LOGINFAILURE,
  LOGOUT,
  SETROLE,
  STUDENTLOGINSUCCESS,
  UNIVERSITYLOGINSUCESS,
} from "../ActionTypes";

export const signup = (details) => async (dispatch) => {
  try {
    const res = await axios.post(
      `https://seed-global-assignment.onrender.com/${details.role}/register`,
      details
    );
    console.log(res.data.message);
    if (
      res.data.message === "user already exists please login" ||
      res.data.message === "student already exists"
    ) {
      alert("user already exists please login");
    } else {
      alert("signup successful");
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: LOGINFAILURE, payload: error });
  }
};

export const login = (details) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post(
      `https://seed-global-assignment.onrender.com/${details.role}/login`,
      details
    );
    // console.log(res.data);
    if (res.message === "wrong credentials") {
      alert("login failed");
    } else {
      if (details.role === "university") {
        dispatch({
          type: UNIVERSITYLOGINSUCESS,
          payload: { ...details, token: res.data },
        });
      } else {
        dispatch({
          type: STUDENTLOGINSUCCESS,
          payload: { ...details, token: res.data },
        });
      }
      alert("login successful");
    }
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const setRole = (details) => async (dispatch) => {
  dispatch({ type: SETROLE, payload: details });
};
