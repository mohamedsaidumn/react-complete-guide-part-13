import {
  createSlice,
  ThunkAction,
  Action,
  ThunkDispatch,
  PayloadAction,
} from "@reduxjs/toolkit";
import { cartStateType, rootReducerType } from "./types";
import { ProductItemType, CartItemType } from "../types";
import { rootActions } from ".";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    replaceCart(state: cartStateType, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(
      state: cartStateType,
      action: PayloadAction<ProductItemType>
    ) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item: CartItemType) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state: cartStateType, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem: CartItemType | undefined = state.items.find(
        (item: CartItemType) => item.id === id
      );

      if (existingItem === undefined) {
        console.log("existingItem is undefined something went wrong");
        return;
      }

      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const sendCartData = (
  cart: cartStateType
): ThunkAction<void, rootReducerType, null, Action<string>> => {
  return async (
    dispatch: ThunkDispatch<rootReducerType, null, Action<string>>,
    getState
  ) => {
    dispatch(
      rootActions.ui.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-160f2-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        rootActions.ui.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        rootActions.ui.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice;
