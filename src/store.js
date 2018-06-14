import { createStore, compose } from "redux";
import rootReducer  from "./reducers/index";

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
/* eslint-disable no-underscore-dangle */
export const store = createStore(rootReducer, compose(reduxDevTools))  ;
/* eslint-enable */ 