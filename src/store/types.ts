import { CartItemType, NotificationType } from "../types";
export type uiStateType = {
  cartIsVisible: boolean;
  notification: NotificationType | null;
};
export type cartStateType = {
  items: CartItemType[];
  totalQuantity: number;
  isChanged: boolean;
};
export type rootReducerType = {
  ui: uiStateType;
  cart: cartStateType;
};
