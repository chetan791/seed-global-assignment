import {
  FETCH_ENQURIES,
  FETCH_FAILURE,
  FETCH_STUDENTS,
  FETCH_UNIVERSITIES,
  LOADING,
} from "../ActionTypes";

const initialState = {
  universities: [],
  students: [],
  enquries: [],
  loading: false,
  isError: "",
};

const DataReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_UNIVERSITIES:
      return {
        ...state,
        universities: payload,
        loading: false,
      };
    case FETCH_STUDENTS:
      return {
        ...state,
        students: payload,
        loading: false,
      };
    case FETCH_ENQURIES:
      return {
        ...state,
        enquries: payload,
        loading: false,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        isError: payload,
      };
    default:
      return state;
  }
};

export default DataReducer;
