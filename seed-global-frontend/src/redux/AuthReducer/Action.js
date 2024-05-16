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
  console.log(details);
  try {
    const res = await axios.post(
      `https://seed-global-assignment.onrender.com/${details.role}/register`,
      details
    );
    // console.log(res);
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
    console.log(res.data);
    if (
      res.data.message === "wrong credentials" ||
      res.data.message === "university not found"
    ) {
      alert("login failed");
    } else {
      if (details.role === "university") {
        dispatch({
          type: UNIVERSITYLOGINSUCESS,
          payload: { ...details, token: res.data.token },
        });
      } else {
        // console.log(res.data);
        dispatch({
          type: STUDENTLOGINSUCCESS,
          payload: {
            ...details,
            token: res.data.response.token,
            name: res.data.response.name,
          },
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

// export const addNewCourse = (details) => async (dispatch) => {
//   dispatch({ type: LOADING });
//   try {
//     const res = await axios.patch(
//       `https://seed-global-assignment.onrender.com/university/addcourse/${details._id}`,
//       details,
//       {
//         headers: {
//           Authorization: `Bearer ${details.token}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log(res.data);
//     alert("added successfully");
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: LOGINFAILURE, payload: error });
//   }
// };
