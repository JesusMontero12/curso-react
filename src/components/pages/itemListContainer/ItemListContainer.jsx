import * as React from "react";
import { useState, useEffect } from "react";
import { products } from "../../../data/productsMock.js";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";

const ItemListContainer = () => {
  const { category } = useParams();

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let productsFiltered = products.filter(
      (product) =>
        product.categoria.toLowerCase().replace(/\s/g, "") === category
    );

    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        resolve(category ? productsFiltered : products);
      } else {
        reject({ status: 400, message: "no estas autorizado" });
      }
    });

    getProducts.then((res) => setItems(res)).catch((error) => setError(error));
  }, [category]);

  return <ItemList items={items} error={error} />;
};

export default ItemListContainer;
