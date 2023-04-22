import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { rootActions } from "../../store";
import { useSelector } from "react-redux";
import { rootReducerType } from "../../store/types";

interface CartButtonProps {}
const CartButton = (props: CartButtonProps) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(
    (state: rootReducerType) => state.cart.totalQuantity
  );
  const toggleCartHandler = () => {
    dispatch(rootActions.ui.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
