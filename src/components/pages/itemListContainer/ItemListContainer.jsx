import * as React from "react";
import { useState, useEffect } from "react";
import { products } from "../../../data/productsMock.js";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";

const ItemListContainer = () => {
  const { key, value } = useParams();

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    let UpFilters = { ...filters };
    UpFilters[key] = value;

    let productsFiltered = products.filter((product) => {
      return Object.keys(UpFilters).every((filterKey) => {
        return product[filterKey] === UpFilters[filterKey];
      });
    });

    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        if (value) {
          resolve(productsFiltered);
        } else {
          resolve(products);
        }
      } else {
        reject({ status: 400, message: "No estás autorizado" });
      }
    });
    setFilters(UpFilters); // Actualiza los filtros//
    setError(null);
    getProducts.then((res) => setItems(res)).catch((error) => setError(error));
  }, [key, value, products]);

  return <ItemList items={items} error={error} />;
};

export default ItemListContainer;
