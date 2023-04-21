import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";

interface MainHeaderProps {}

const MainHeader = (props: MainHeaderProps) => {
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
