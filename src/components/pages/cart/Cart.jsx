import { Link } from "react-router-dom";
import "./Cart.css";
import Swal from "sweetalert2";

const Cart = ({ cart, deleteById, total, totalProd }) => {
  const messageDelete = (msj, img, id) => {
    Swal.fire({
      imageUrl: img,
      imageHeight: 100,
      title: "¡Espera!",
      text: msj,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Continuar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteById(id);
        Swal.fire({
          icon: "success",
          title: "¡Genial!",
          text: "Producto eliminado con exito",
          showConfirmButton: false,
          timer: 3500,
        });
      }
    });
  };

  return (
    <>
      <div className="mi_bolsa">
        <h2>Mi bolsa de compras personalizada</h2>
        <div className="content_productos" id="content_productos">
          <div className="productosCart">
            {cart.length > 0 ? (
              cart.map((product) => (
                <Link
                  to={`/itemDetail/${product.id}`}
                  key={product.id}
                  className="grid"
                >
                  {product.sale == true && (
                    <span className="saleCart">
                      <p>sale</p>
                      <img
                        src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493190/proyects/vector/icons/fire_lni6ih.png"
                        alt="icono de fuego"
                      />
                    </span>
                  )}
                  <div className="cuerpo">
                    <img src={product.imagen[0]} alt=""></img>
                  </div>
                  <div className="content_info_cart">
                    <div className="titulo_cart">
                      <h3>
                        {(product.nombre?.length || 0) > 15
                          ? product.nombre.substring(0, 14) + "..."
                          : product.nombre}
                        {product.desc > 0 && <span>{`-${product.desc}%`}</span>}
                      </h3>
                      <p>
                        {(product.descripcion?.length || 0) > 60
                          ? product.descripcion.substring(0, 60) + "..."
                          : product.descripcion}
                      </p>
                    </div>
                    <div className="cantidad">
                      <p>Cantidad: {product.cantidad}</p>
                    </div>
                    <div className="talla">
                      <p>Talla: m</p>
                    </div>
                    <div className="precio_descuento">
                      {product.desc !== undefined &&
                      product.precio !== undefined ? (
                        product.desc > 0 ? (
                          <p>
                            {(
                              product.precio -
                              (product.precio / 100) * product.desc
                            ).toFixed(3)}
                          </p>
                        ) : (
                          <p>{product.precio.toFixed(3)}</p>
                        )
                      ) : (
                        <p>...</p>
                      )}
                    </div>
                    <div className="precio">
                      {product.desc > 0 ? (
                        <p>{product.precio.toFixed(3)}</p>
                      ) : (
                        <br />
                      )}
                    </div>
                  </div>
                  <div className="actionProduct">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        messageDelete(
                          `¿Quieres eliminar "${product.nombre}" del carrito?`,
                          product.imagen[0],
                          product.id
                        );
                      }}
                    >
                      <img
                        src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1713452676/proyects/vector/icons/delete_bawi7y.png"
                        className="btnEliminar"
                        alt="Eliminar producto"
                      ></img>
                    </button>
                  </div>
                </Link>
              ))
            ) : (
              <h1 className="CartCero">
                No tienes ningún producto agregado al carrito.
              </h1>
            )}
          </div>
          {cart.length > 0 && (
            <div className="total">
              <div className="headerDetalle">
                <h4>Detalle de la compra</h4>
                <div>Tienes {totalProd} productos agregados al carrito</div>
              </div>
              <div className="detalle">
                <p id="subtotal">
                  Sub-total: <span>{total.toFixed(3)}</span>
                </p>
                <p id="iva">
                  IVA (19%): <span></span>
                </p>
                <p id="total">
                  Total: <span>{total.toFixed(3)}</span>
                </p>
                <Link to="/checkout" className="btnCheckout">
                  Ir a pagar
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
