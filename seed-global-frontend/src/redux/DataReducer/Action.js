import axios from "axios";
import { FETCH_FAILURE, FETCH_UNIVERSITIES, LOADING } from "../ActionTypes";

export const getuniversities = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.get(
      "https://seed-global-assignment.onrender.com/university/"
    );
    console.log(res.data.universities);
    dispatch({ type: FETCH_UNIVERSITIES, payload: res.data.universities });
  } catch (error) {
    console.log(error);
    dispatch({ type: FETCH_FAILURE, payload: error });
  }
};

export const applyForUniversity = (details) => async (dispatch) => {
  console.log(details.universityID, "1");
  try {
    const res = await axios.post(
      `https://seed-global-assignment.onrender.com/enquries/create/${details.universityID}`,
      details,
      {
        headers: {
          Authorization: `Bearer ${details.token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res.data);
    alert("applied for university successfully");
  } catch (error) {
    console.log(error);
    dispatch({ type: FETCH_FAILURE, payload: error });
  }
};

export const getEnrolledUniversities = (details) => async (dispatch) => {
  try {
    const  res = await axios.get(
      `https://seed-global-assignment.onrender.com/enquries/`
    )
  } catch (error) {
    console.log(error);
  }
};
