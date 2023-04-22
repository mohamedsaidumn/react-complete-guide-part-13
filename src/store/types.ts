import { CartItemType } from "../types";
export type uiStateType = { cartIsVisible: boolean };
export type cartStateType = { items: CartItemType[]; totalQuantity: number };
export type rootReducerType = {
  ui: uiStateType;
  cart: cartStateType;
};
