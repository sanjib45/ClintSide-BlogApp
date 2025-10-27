import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./blog/blogredux";
import authApi from "./Authen/auth";
import authReducer from './Authen/authslice';

export const store = configureStore({
  reducer: {
    // Define your reducers here
    [blogApi.reducerPath]: blogApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogApi.middleware,authApi.middleware),
});
