import { combineReducers } from "redux";
import weatherReducer from "./weather";

const RootReducer = combineReducers({
  weatherReducer,
});

export default RootReducer;
