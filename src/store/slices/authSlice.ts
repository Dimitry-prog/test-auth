import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios, {AxiosError, AxiosResponse} from "axios";
import {handleErrors} from "../../api/api";

type AuthState = {
  isRegistered: boolean;
  token: string | null;
  isLoading: boolean;
}

type AuthData = {
  email: string;
  password: string;
}

const initialState: AuthState = {
  isRegistered: false,
  token: null,
  isLoading: false,
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data: AuthData) => {
    try {
      const response: AxiosResponse<boolean> = await axios.post(
        'hjhg',
        data
      );

      return response.data;
    } catch (e) {
      const error = e as AxiosError<string>;
      handleErrors(error);
    }
  });

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
