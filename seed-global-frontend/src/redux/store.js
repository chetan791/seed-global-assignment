import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import AuthReducer from "./AuthReducer/Reducer";
import { thunk } from "redux-thunk";
import DataReducer from "./DataReducer/Reducer";

const rootReducer = combineReducers({
  AuthReducer,
  DataReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
