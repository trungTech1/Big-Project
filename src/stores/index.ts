import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userReducer, UserActions } from "./slices/user.slice";
import * as jose from "jose";

const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;

// Store.dispatch(UserActions.getUser());

const decodeToken = async (token: string, key: string) => {
  try {
    const { payload } = await jose.jwtVerify(
      token,
      new TextEncoder().encode(key)
    );
    return payload;
  } catch (error) {
    return null;
  }
};

const token = localStorage.getItem("token");
if (token) {
  decodeToken(token, "quangtrungdn94").then((res) => {
    if (res !== null) {
      Store.dispatch(UserActions.setUser(res as any));
    } else {
      localStorage.removeItem("token");
    }
  });
}
