import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "../reducers";

// store
const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  return store;
};

// wrapper
const wrapper = createWrapper(createStore);

export default wrapper;
