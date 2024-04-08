import React from "react";
import "./ProductCard.css";
import { Box } from "@mui/material";

const ProductCard = (props) => {
  const { imgUrl, product, price } = props;
  return (
    <>
      <div className="productos" id="productos">
        <a href="#">
          <span className="sale">
            <p>sale</p>
            <img src="./src/assets/icons/fire.png" alt="icono de fuego" />
          </span>
          <div className="cuerpo">
            <img src={imgUrl} alt=""></img>
          </div>
          <div className="titulo">
            <h3>{product}</h3>
          </div>
          <div className="precio_descuento">
            <p>{price}</p>
          </div>
          <div className="precio">
            <p>{price}</p>
          </div>
          <button className="btnAdd">Agregar</button>
        </a>
      </div>
    </>
  );
};

export default ProductCard;
