import axios from "axios";
import {BASE_AUTH_URL, baseURL} from "../utils/constants";
import {AuthData, ResponseLoginUser, ResponseRegisterUser} from "../types/authTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {handleRequest} from "./api";

export const authApi = axios.create({
  baseURL: BASE_AUTH_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const registerUser = createAsyncThunk<ResponseRegisterUser, AuthData, { rejectValue: string }>(
  'auth/register',
  async (authData, { rejectWithValue }) => {
    const requestFunc = () => authApi.post('signup.json', authData);
    return handleRequest(requestFunc, rejectWithValue, 'Вы успешно зарегистрированы');
  }
);

export const loginUser = createAsyncThunk<ResponseLoginUser, AuthData, { rejectValue: string }>(
  'auth/login',
  async (authData, { rejectWithValue }) => {
    const requestFunc = () => authApi.post('signin.json', authData);
    return handleRequest(requestFunc, rejectWithValue, "Добро пожаловать");
  }
);