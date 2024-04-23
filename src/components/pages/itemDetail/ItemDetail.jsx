import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const { id, nombre, precio, categoria, descripcion, imagen, desc } = item;
  const imgProduct = imagen && Array.isArray(imagen) ? imagen.slice(0, 3) : [];

  return (
    <>
      <div className="content_producto_detalle" id="content_producto">
        <div className="productos" id="productos">
          <div className="productoDetallado">
            <div className="galeriaImg">
              <ul>
                <li>
                  <img
                    className="imgProductoMin"
                    id=""
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
                <label id="" className="FlechaImgizquierda">
                  &#8249;
                </label>
                <label id="" className="FlechaImgDerecha">
                  &#8250;
                </label>
              </div>
              <img
                className="imgProducto"
                id=""
                src={imgProduct[0]}
                alt=""
              ></img>
            </div>
            <div className="content_info">
              <div className="titulo">
                <h3>
                  {nombre} {desc}
                </h3>
                <p>{descripcion}</p>
                <ul>
                  <li>
                    <img src="../assets/icons/estrella.png" alt=""></img>
                  </li>
                  <li>
                    <img src="../assets/icons/estrella.png" alt=""></img>
                  </li>
                  <li>
                    <img src="../assets/icons/estrella.png" alt=""></img>
                  </li>
                  <li>
                    <img src="../assets/icons/estrella.png" alt=""></img>
                  </li>
                  <li>
                    <img src="../assets/icons/estrella-dark.png" alt=""></img>
                  </li>
                  <a href="#comentarios" htmlFor="comentarios">
                    hay mas de 100 comentarios.
                  </a>
                </ul>
              </div>
              <div className="precio_descuento">
                <p id="precioCantidad">{precio}</p>
              </div>
              <div className="precio">{precio}</div>
              <div className="cantidad">
                <div className="btns-cantidad">
                  <CounterContainer />
                </div>
              </div>
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
              <div className="btnAction">
                <a href="" className="btnAdd">
                  agregar
                </a>
                <img
                  src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493193/proyects/vector/icons/heart_xb3q16.png"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="comentarios" id="comentarios">
          <p>Comentarios</p>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
