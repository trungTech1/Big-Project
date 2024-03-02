import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";

enum status {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  status: status;
}
interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const UserActions = userSlice.actions;
export const userReducer = userSlice.reducer;
