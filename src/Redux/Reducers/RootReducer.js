import { combineReducers } from "redux";
import NavReducer from "./NavReducer";

export default combineReducers({
  sidebar: NavReducer,
});
