import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { rootReducerType } from "./store/types";
import { useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

let isInitial = true;
type AppDispatch = ThunkDispatch<rootReducerType, null, Action>;

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const showCart = useSelector(
    (state: rootReducerType) => state.ui.cartIsVisible
  );
  const cart = useSelector((state: rootReducerType) => state.cart);
  const notification = useSelector(
    (state: rootReducerType) => state.ui.notification
  );

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.isChanged) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
