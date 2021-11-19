import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import beginInitialState from "./initialState.json";
import rootReducer from "./rootReducer";

const store = createStore(
    rootReducer,
    beginInitialState,
    applyMiddleware( thunk )
);

export default store;
