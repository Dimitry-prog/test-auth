import {ActionReducerMapBuilder, AnyAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loginUser, registerUser} from "../../api/authAPI";

type AuthState = {
  isRegistered: boolean;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

const isToken = localStorage.getItem('token');

const initialState: AuthState = {
  isRegistered: false,
  token: isToken ? JSON.parse(isToken) : null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<AuthState>) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isRegistered = action.payload.isRegistered;
      })
      .addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.token = action.payload.token;
        localStorage.setItem('token', JSON.stringify(action.payload.token));
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;

const isError = (action: AnyAction) => {
  return action.type.endsWith('rejected');
}