import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

const middlewares = [thunkMiddleware];

if (__DEV__) {
  const createDebugger = require("redux-flipper").default;
  middlewares.push(createDebugger());
}

export default createStore(rootReducer, applyMiddleware(...middlewares));
