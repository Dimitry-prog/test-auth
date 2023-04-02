import axios from "axios";
import {BASE_USER_URL, baseURL} from "../utils/constants";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {handleRequest} from "./api";
import {IUser} from "../types/userTypes";

const token = JSON.parse(localStorage.getItem('token') ?? 'null');

export const userApi = axios.create({
  baseURL: BASE_USER_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
});

export const getUser = createAsyncThunk<IUser, undefined, {rejectValue: string}>(
  'user/getUser',
  async (_, {rejectWithValue}) => {
    const request = () => userApi('user.json');
    return handleRequest(request, rejectWithValue, "");
  }
)