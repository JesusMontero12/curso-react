import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CartContex } from "../../../context/CartContext";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig.js";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { addToCart, getQuantityById } = useContext(CartContex);

  let initial = getQuantityById(id);

  useEffect(() => {
    const productcolection = collection(db, "products");
    const refDoc = doc(productcolection, id);
    getDoc(refDoc).then((res) => {
      setItem({ id: res.id, ...res.data() });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let product = { ...item, cantidad: cantidad };
    addToCart(product);
  };

  return <ItemDetail item={item} onAdd={onAdd} initial={initial} />;
};

export default ItemDetailContainer;
