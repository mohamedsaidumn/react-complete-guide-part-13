import classes from "./CartButton.module.css";

interface CartButtonProps {}
const CartButton = (props: CartButtonProps) => {
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
