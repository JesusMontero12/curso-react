import * as React from "react";
import { useState, useEffect } from "react";
import { products } from "../../../data/productsMock.js";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";

const ItemListContainer = () => {
  const { category, genero } = useParams();

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let productsFiltered = products.filter(
      (product) =>
        product.categoria.toLowerCase().replace(/\s/g, "") === category &&
        (genero ? product.genero.includes(genero) : true)
    );

    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        if (genero) {
          resolve(productsFiltered);
        } else if (category) {
          resolve(productsFiltered);
        } else {
          resolve(products);
        }
      } else {
        reject({ status: 400, message: "No estás autorizado" });
      }
    });

    getProducts.then((res) => setItems(res)).catch((error) => setError(error));
  }, [category]);

  return <ItemList items={items} error={error} />;
};

export default ItemListContainer;
