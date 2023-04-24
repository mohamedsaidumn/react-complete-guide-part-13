import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartStateType } from "./types";
import { ProductItemType, CartItemType } from "../types";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    isChanged: false,
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
      state.isChanged = true;
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

export const cartActions = cartSlice.actions;

export default cartSlice;
