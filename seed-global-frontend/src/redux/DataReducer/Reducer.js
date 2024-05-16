import {
  FETCH_ENQURIES,
  FETCH_FAILURE,
  FETCH_STUDENTS,
  FETCH_UNIVERSITIES,
  LOADING,
  UPDATE_ENQURIES,
} from "../ActionTypes";

const initialState = {
  universities: [],
  students: [],
  enquiries: [],
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
        loading: false,
        ...state,
        universities: payload,
      };
    case FETCH_STUDENTS:
      return {
        loading: false,
        ...state,
        students: payload,
      };
    case FETCH_ENQURIES:
      return {
        loading: false,
        ...state,
        enquiries: payload,
      };
    case FETCH_FAILURE:
      return {
        loading: false,
        ...state,
        isError: payload,
      };
    case UPDATE_ENQURIES:
      return {
        ...state,
        enquiries: state.enquiries.map((element) => {
          if (element._id === payload._id) {
            return payload;
          } else {
            return element;
          }
        }),
      };
    default:
      return state;
  }
};

export default DataReducer;
