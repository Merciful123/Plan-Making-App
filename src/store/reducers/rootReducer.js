import { combineReducers } from "redux";
import authReducers from "./authReducers";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({
  auth: authReducers,
  project: projectReducer,
});

export default rootReducer;
