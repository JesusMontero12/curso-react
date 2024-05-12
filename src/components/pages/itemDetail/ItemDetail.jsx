import { useState } from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";
import { Skeleton, Stack } from "@mui/material";

const ItemDetail = ({ item, onAdd, initial }) => {
  const { id, nombre, precio, sale, descripcion, imagen, desc } = item;
  const imgProduct = imagen && Array.isArray(imagen) ? imagen.slice(0, 3) : [];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeImage = (direction) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) {
        newIndex = imagen.length - 1;
      } else if (newIndex >= imagen.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  // validamos si el producto esta en sale para crear el elemento que indique que este esta en sale
  const newSale = sale == true && (
    <span className="saleDetail">
      <p>sale</p>
      <img
        src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493190/proyects/vector/icons/fire_lni6ih.png"
        alt="icono de fuego"
      />
    </span>
  );


  // Validamos si existe descuento agrega un etiqueta span con los datos
  const newElementDesc = desc > 0 ? <span>{`-${desc}%`}</span> : null;
  // validamos si hay descuento mostramos el precio para darle clase subrayada
  const newPrice = desc > 0 ? <p>{precio.toFixed(3)}</p> : <br />;
  // validamos si hay algun descuento realizamos una operacion de descuento si no solo muestra el precio normal
  const newElementPriceDesc =
    desc !== undefined && precio !== undefined ? (
      desc > 0 ? (
        <p>{(precio - (precio / 100) * desc).toFixed(3)}</p>
      ) : (
        <p>{precio.toFixed(3)}</p>
      )
    ) : (
      <p>...</p>
    );

  return (
    <>
      {item.id ? (
        <div className="content_producto_detalle">
          <div className="productosDetail">
            {newSale}
            <div className="productoDetallado">
              <div className="galeriaImg">
                <ul>
                  <li>
                    <img
                      className="imgProductoMin"
                      src={imgProduct[0]}
                      alt=""
                    ></img>
                  </li>
                  <li>
                    <img
                      className="imgProductoMin"
                      id=""
                      src={imgProduct[1]}
                      alt=""
                    ></img>
                  </li>
                  <li>
                    <img
                      className="imgProductoMin"
                      id=""
                      src={imgProduct[2]}
                      alt=""
                    ></img>
                  </li>
                </ul>
              </div>
              <div className="cuerpo">
                <div className="btnsCambiar">
                  <button
                    onClick={() => {
                      handleChangeImage(-1);
                    }}
                    className="FlechaImgizquierda"
                  >
                    &#8249;
                  </button>
                  <button
                    onClick={() => {
                      handleChangeImage(-1);
                    }}
                    className="FlechaImgDerecha"
                  >
                    &#8250;
                  </button>
                </div>
                <img
                  className="imgProducto"
                  id=""
                  src={imgProduct[currentIndex]}
                  alt=""
                ></img>
              </div>
              <div className="content_info">
                <div className="tituloDetail">
                  <h3>
                    {nombre} {newElementDesc}
                  </h3>
                  <p>{descripcion}</p>
                  <ul>
                    <li>
                      <img
                        src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1714691137/proyects/vector/icons/estrella_gzzpo3.png"
                        alt=""
                      ></img>
                    </li>
                    <li>
                      <img
                        src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1714691137/proyects/vector/icons/estrella_gzzpo3.png"
                        alt=""
                      ></img>
                    </li>
                    <li>
                      <img
                        src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1714691137/proyects/vector/icons/estrella_gzzpo3.png"
                        alt=""
                      ></img>
                    </li>
                    <li>
                      <img
                        src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1714691137/proyects/vector/icons/estrella_gzzpo3.png"
                        alt=""
                      ></img>
                    </li>
                    <li>
                      <img
                        src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1714691137/proyects/vector/icons/estrella-dark_ltjptw.png"
                        alt=""
                      ></img>
                    </li>
                    <a href="#comentarios" htmlFor="comentarios">
                      hay mas de 100 comentarios.
                    </a>
                  </ul>
                </div>
                <div className="precio_descuento">{newElementPriceDesc}</div>
                <div className="precio">{newPrice}</div>
                <div className="tallas">
                  <div className="talla">
                    <input id="u" type="checkbox"></input>
                    <label htmlFor="u" id="TallaU">
                      U
                    </label>
                  </div>
                  <div className="talla">
                    <input id="s" type="checkbox"></input>
                    <label htmlFor="s" id="TallaS">
                      S
                    </label>
                  </div>
                  <div className="talla">
                    <input id="m" type="checkbox"></input>
                    <label htmlFor="m" id="TallaM">
                      M
                    </label>
                  </div>
                  <div className="talla">
                    <input id="l" type="checkbox"></input>
                    <label htmlFor="l" id="TallaL">
                      L
                    </label>
                  </div>
                  <div className="talla">
                    <input id="xl" type="checkbox"></input>
                    <label htmlFor="xl" id="TallaXL">
                      XL
                    </label>
                  </div>
                  <div className="talla">
                    <input id="xxl" type="checkbox"></input>
                    <label htmlFor="xxl" id="TallaXXL">
                      XXL
                    </label>
                  </div>
                </div>
                <div className="cantidad">
                  <div className="btns-cantidad">
                    <CounterContainer
                      stock={item.stock}
                      onAdd={onAdd}
                      initial={initial}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="comentarios" id="comentarios">
            <p>Comentarios</p>
          </div>
        </div>
      ) : (
        <div className="SkeletonContainer">
          <div className="skeletonCardDetail">
            <Stack spacing={1} className="minCartImg">
              <Skeleton variant="rounded" width={50} height={50} />
              <Skeleton variant="rounded" width={50} height={50} />
              <Skeleton variant="rounded" width={50} height={50} />
            </Stack>
            <Stack spacing={1} className="cartImg">
              <Skeleton variant="rounded" width={300} height={300} />
            </Stack>
            <Stack spacing={1} className="cartText">
              <Skeleton
                variant="text"
                sx={{ fontSize: "30px" }}
                className="tittleSkeleton"
              />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} width="100%" />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} width="80%" />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} width="60%" />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} width="40%" />
              <Skeleton
                variant="rounded"
                width={200}
                height={40}
                className="buttonSkeleton"
              />
            </Stack>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
