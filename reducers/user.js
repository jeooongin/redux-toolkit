import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 더미 데이터
const dummyUser = (data) => ({
  email: data.email,
  password: data.password,
});

// initialState
const initialState = {
  me: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,
};

// 비동기 액션
export const logIn = createAsyncThunk("user/login", async (data, thunkAPI) => {
  try {
    const response = await dummyUser(data);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
    e;
  }
});

// reducer
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(logIn.pending, (state) => {
        state.logInLoading = true;
        state.logInDone = false;
        state.logInError = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.logInLoading = false;
        state.logInDone = true;
        state.logInError = null;
        state.me = action.payload;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.logInLoading = false;
        state.logInDone = false;
        state.logInError = action.payload;
      }),
});

export default userSlice;
