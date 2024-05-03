import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { products } from "../../../data/productsMock.js";
import { CartContex } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { addToCart } = useContext(CartContex);

  useEffect(() => {
    let productFound = products.find((product) => product.id === +id);
    const getProduct = new Promise((resolve, reject) => {
      if (productFound === undefined) {
        reject("producto no encontrado");
      } else {
        resolve(productFound);
      }
    });

    getProduct.then((res) => setItem(res));
  }, [id]);

  const onAdd = (cantidad) => {
    let product = { ...item, cantidad: cantidad };
    addToCart(product);
  };

  return <ItemDetail item={item} onAdd={onAdd} />;
};

export default ItemDetailContainer;
