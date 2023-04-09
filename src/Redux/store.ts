import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import apiReducer from "./apiSlice";
import selectProductReducer from "./selectProductSlice";
import featuredProductsReducer from "./featuredProductSlice";
import promotionProductReducer from "./promotionProductSlice";
import isLoginReducer from "./isLoginSlice";

const store = configureStore({
  reducer: {
    api: apiReducer,
    selectProduct: selectProductReducer,
    featuredProducts: featuredProductsReducer,
    promotionProduct: promotionProductReducer,
    isLogin: isLoginReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
