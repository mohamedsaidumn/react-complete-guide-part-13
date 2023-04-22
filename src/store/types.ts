import { CartItemType, NotificationType } from "../types";
export type uiStateType = {
  cartIsVisible: boolean;
  notification: NotificationType | null;
};
export type cartStateType = { items: CartItemType[]; totalQuantity: number };
export type rootReducerType = {
  ui: uiStateType;
  cart: cartStateType;
};
