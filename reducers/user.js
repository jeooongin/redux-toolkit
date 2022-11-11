import { createSlice } from "@reduxjs/toolkit";

// initialState
const initialState = {
  logInSuccess: false,
};

// reducer
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn(state) {
      state.logInSuccess = true;
    },
    logOut(state) {
      state.logInSuccess = false;
    },
  },
});

export default userSlice;
