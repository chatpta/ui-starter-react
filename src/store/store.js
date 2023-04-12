import { configureStore } from '@reduxjs/toolkit';
import visitorReducers from './reducers/visitorReducers';
import authReducers from "./reducers/authReducers";

export const store = configureStore({
  reducer: {
    visitor: visitorReducers,
    auth: authReducers
  },
});
