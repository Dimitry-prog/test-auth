import {ActionReducerMapBuilder, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../types/userTypes";
import {getUser} from "../../api/userApi";

type UserState = {
  userInfo: IUser | null;
  loading: boolean;
  error: string | unknown;
  email: string;
}

const initialState: UserState = {
  userInfo: null,
  loading: false,
  error: null,
  email: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    }
  },
  extraReducers: (builder: ActionReducerMapBuilder<UserState>) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.userInfo = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
});

export const {setUserEmail} = userSlice.actions;

export default userSlice.reducer;