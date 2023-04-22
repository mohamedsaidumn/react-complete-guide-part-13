import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { rootActions } from "../../store";

interface CartButtonProps {}
const CartButton = (props: CartButtonProps) => {
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(rootActions.ui.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
