import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import { uiActions } from "./ui-slice";
import cartSlice from "./cart-slice";
import { cartActions } from "./cart-slice";

export const rootActions = { ui: uiActions, cart: cartActions };

const rootReducer = { ui: uiSlice.reducer, cart: cartSlice.reducer };
const store = configureStore({
  reducer: rootReducer,
});

export default store;
