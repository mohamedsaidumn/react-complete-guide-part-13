import classes from "./CartItem.module.css";
import { CartItemType } from "../../types";
import { rootActions } from "../../store";
import { useDispatch } from "react-redux";
import { ProductItemType } from "../../types";
interface CartItemProps {
  item: CartItemType;
}
const CartItem = (props: CartItemProps) => {
  const dispatch = useDispatch();
  const { name, quantity, totalPrice, price, id } = props.item;

  const removeItemHandler = () => {
    dispatch(rootActions.cart.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    const productItem: ProductItemType = {
      id: id,
      title: name,
      price: price,
      description: "", //This does't matter to cart
    };

    dispatch(rootActions.cart.addItemToCart(productItem));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
