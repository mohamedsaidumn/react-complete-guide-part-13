import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { rootReducerType } from "./store/types";

function App() {
  const showCart = useSelector(
    (state: rootReducerType) => state.ui.cartIsVisible
  );
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
