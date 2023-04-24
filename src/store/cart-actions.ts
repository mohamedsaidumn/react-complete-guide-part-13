import { ThunkAction, Action, ThunkDispatch } from "@reduxjs/toolkit";
import { cartStateType, rootReducerType } from "./types";
import { rootActions } from ".";

export const sendCartData = (
  cart: cartStateType
): ThunkAction<void, rootReducerType, null, Action<string>> => {
  return async (
    dispatch: ThunkDispatch<rootReducerType, null, Action<string>>
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
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
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

export const fetchCartData = (): ThunkAction<
  void,
  rootReducerType,
  null,
  Action<string>
> => {
  return async (
    dispatch: ThunkDispatch<rootReducerType, null, Action<string>>
  ) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-160f2-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        rootActions.cart.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
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
