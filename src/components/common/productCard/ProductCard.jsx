import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  sale,
  imgUrl,
  product,
  description,
  price,
  desc,
}) => {
  // validamos si el producto esta en sale para crear el elemento que indique que este esta en sale
  const newSale =
    sale == true ? (
      <span className="sale">
        <p>sale</p>
        <img
          src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493190/proyects/vector/icons/fire_lni6ih.png"
          alt="icono de fuego"
        />
      </span>
    ) : null;
  // validamos si el nombre del producto tiene caracteres mayor a 15 (lo recortamos)
  const newName =
    product.length > 15 ? product.substring(0, 14) + "..." : product;
  // recortamos la descripcion del producto
  const newDescription =
    description.length > 40
      ? description.substring(0, 40) + "..."
      : description;
  // validamos si hay descuento mostramos el precio para darle clase subrayada
  const newPrice = desc > 0 ? <p>{price.toFixed(3)}</p> : <br />;
  // Validamos si existe descuento agrega un etiqueta span con los datos
  const newElementDesc = desc > 0 ? <span>{`-${desc}%`}</span> : null;
  // validamos si hay algun descuento realizamos una operacion de descuento si no solo muestra el precio normal
  const newElementPriceDesc =
    desc > 0 ? (
      <p>{(price - (price / 100) * desc).toFixed(3)}</p>
    ) : (
      <p>{price.toFixed(3)}</p>
    );
  return (
    <>
      <div className="productos" id="productos">
        <Link to={`/itemDetail/${id}`}>
          {newSale}
          <div className="cuerpo">
            <div className="btnsCambiar">
              <label
                id="anterior_${producto.id}"
                className="FlechaImgizquierda"
              >
                &#8249;
              </label>
              <label id="siguiente_${producto.id}" className="FlechaImgDerecha">
                &#8250;
              </label>
            </div>
            <img src={imgUrl} alt=""></img>
          </div>
          <div className="titulo">
            <h3>{newName}</h3>
            <p>{newDescription}</p>
          </div>
          <div className="precio_descuento">
            {newElementPriceDesc}
            {newElementDesc}
          </div>
          <div className="precio">{newPrice}</div>
        </Link>
        <Link to="/itemDetail" className="btnAdd">
          Agregar
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
