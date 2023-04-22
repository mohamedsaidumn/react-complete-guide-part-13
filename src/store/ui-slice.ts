import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { NotificationType } from "../types";
import { uiStateType } from "./types";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state: uiStateType) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(
      state: uiStateType,
      action: PayloadAction<NotificationType>
    ) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
