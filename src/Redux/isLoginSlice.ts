import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
  isLoginAdmin: boolean;
  isLoginCustomer: boolean;
}

const storedStateAdmin =
  typeof window !== "undefined"
    ? localStorage.getItem("loginStateAdmin")
    : null;

const storedStateCustomer =
  typeof window !== "undefined"
    ? localStorage.getItem("loginStateAdmin")
    : null;

const initialState: LoginState = {
  isLoginAdmin: storedStateAdmin ? JSON.parse(storedStateAdmin).isLoginAdmin : false,
  isLoginCustomer: storedStateCustomer
    ? JSON.parse(storedStateCustomer).isLoginCustomer
    : false,
};

const isLoginSlice = createSlice({
  name: "isLogin",
  initialState,
  reducers: {
    setIsLoginAdmin(state, action: PayloadAction<boolean>) {
      state.isLoginAdmin = action.payload;

      if (typeof window !== "undefined") {
        localStorage.setItem("loginStateAdmin", JSON.stringify(state));
      }
    },
    setIsLoginCustomer(state, action: PayloadAction<boolean>) {
      state.isLoginCustomer = action.payload;

      if (typeof window !== "undefined") {
        localStorage.setItem("loginStateCustomer", JSON.stringify(state));
      }
    },
  },
});

export const { setIsLoginAdmin, setIsLoginCustomer } = isLoginSlice.actions;

export default isLoginSlice.reducer;
