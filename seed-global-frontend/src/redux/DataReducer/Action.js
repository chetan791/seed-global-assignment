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
