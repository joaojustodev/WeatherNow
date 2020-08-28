import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import RootReducer from "./ducks";

const store = createStore(RootReducer, applyMiddleware(ReduxThunk));

export default store;
