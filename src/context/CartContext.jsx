import { createContext, useState } from "react";

export const CartContex = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    let validatedProduct = cart.some((product) => product.id === id);
    return validatedProduct;
  };

  const addToCart = (product) => {
    const exist = isInCart(product.id);
    if (exist) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return { ...elemento, cantidad: product.cantidad };
        } else {
          return elemento;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const deleteById = (id) => {
    const newArray = cart.filter((product) => product.id !== id);
    setCart(newArray);
  };

  const getQuantityById = (id) => {
    let product = cart.find((element) => element.id === id);
    return product?.cantidad;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, product) => {
      return acc + product.cantidad * product.precio;
    }, 0);
    return total;
  };

  const getTotalItems = () => {
    let total = cart.reduce((acc, product) => {
      return acc + product.cantidad
    }, 0 )
    return total
  };

  let data = {
    cart,
    addToCart,
    deleteById,
    getQuantityById,
    getTotalPrice,
    getTotalItems
  };
  return <CartContex.Provider value={data}> {children} </CartContex.Provider>;
};

export default CartContextProvider;
