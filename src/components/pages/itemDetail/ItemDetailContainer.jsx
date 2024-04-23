import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { products } from "../../../data/productsMock.js";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

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

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
