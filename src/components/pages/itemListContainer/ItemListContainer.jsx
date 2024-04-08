import * as React from "react";
import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { products } from "../../../data/productsMock.js";
import ItemList from "./ItemList.jsx";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject({ status: 400, message: "algo salio mal" });
      }
    });

    getProducts.then((res) => setItems(res)).catch((error) => setError(error));
  }, []);

  return <ItemList items={items} error={error} />;
};

export default ItemListContainer;
