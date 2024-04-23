import * as React from "react";
import { useState, useEffect } from "react";
import { products } from "../../../data/productsMock.js";
import ItemListMostSold from "./ItemListMostSold.jsx";

const ItemListMostSoldContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cntVendidoLimit = 80;
    let productsFiltered = products.filter(
      (product) => product.cntVendido >= cntVendidoLimit
    );

    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        setTimeout(() => {
          resolve(cntVendidoLimit ? productsFiltered : products);
        }, 2000);
      } else {
        reject({ status: 400, message: "algo salio mal" });
      }
    });

    getProducts.then((res) => setItems(res)).catch((error) => setError(error));
  }, []);

  return <ItemListMostSold items={items} error={error} />;
};

export default ItemListMostSoldContainer;
