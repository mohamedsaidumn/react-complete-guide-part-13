import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { CartItemType } from "../../types";
import { rootReducerType } from "../../store/types";

interface CartProps {}

const Cart = (props: CartProps) => {
  const cartItems: CartItemType[] = useSelector(
    (state: rootReducerType) => state.cart.items
  );

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((cartItem) => {
          return (
            <CartItem
              key={cartItem.id}
              item={{
                id: cartItem.id,
                name: cartItem.name,
                quantity: cartItem.quantity,
                totalPrice: cartItem.totalPrice,
                price: cartItem.price,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
