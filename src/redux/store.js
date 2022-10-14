import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootreducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
