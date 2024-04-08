import React from "react";
import "./ProductCard.css";

const ProductCard = ({ imgUrl, product, price }) => {
  return (
    <>
      <div className="productos" id="productos">
        <a href="#">
          <span className="sale">
            <p>sale</p>
            <img
              src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493190/proyects/vector/icons/fire_lni6ih.png"
              alt="icono de fuego"
            />
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
