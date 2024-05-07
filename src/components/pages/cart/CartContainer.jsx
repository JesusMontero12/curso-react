import { useContext } from "react";
import Cart from "./Cart.jsx";
import { CartContex } from "../../../context/CartContext.jsx";
const CartContainer = () => {
  const { cart, isInCart, deleteById, getTotalPrice, getTotalItems } =
    useContext(CartContex);
  let totalProd = getTotalItems();
  let total = getTotalPrice();

  return (
    <Cart
      cart={cart}
      isInCart={isInCart}
      deleteById={deleteById}
      total={total}
      totalProd={totalProd}
    />
  );
};

export default CartContainer;
