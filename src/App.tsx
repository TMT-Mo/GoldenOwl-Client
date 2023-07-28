import "./App.css";
import Products from "@/components/products";
import Cart from "@/components/cart";
import { useContext, useEffect } from "react";
import { CartContext } from "@/store/cart-context";
import { getSavedItem as getLocalSaved } from "@/util/helper";

function App() {
  const { getSavedItem } = useContext(CartContext);

  useEffect(() => {
    const { items, totalAmount } = getLocalSaved();

    getSavedItem(items, totalAmount);
  }, []);

  return (
    <div
      className={`background flex px-3 py-7 justify-center flex-col space-y-10 items-center relative md:flex-row md:space-x-10 md:space-y-0`}
    >
      <Products />
      <Cart />
    </div>
  );
}

export default App;
