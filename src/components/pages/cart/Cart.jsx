import "./Cart.css";
const Cart = () => {
  return (
    <>
      <div className="mi_bolsa">
        <h2>Mi bolsa de compras personalizada</h2>
        <div className="content_productos" id="content_productos">
          <div className="productos" id="productos">
            {/* <!-- Aqui se agregan los productos de manera dinamica --> */}
            <div className="grid">
              <span class="sale">
                <p>Sale</p>
                <img src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493190/proyects/vector/icons/fire_lni6ih.png"></img>
              </span>
              <div className="cuerpo">
                <img src="" alt=""></img>
              </div>
              <div className="content_info">
                <div className="titulo">
                  <h3>Nombre y elementoDescuento</h3>
                  <p>descripcion</p>
                </div>
                <div className="precio_descuento">totalProdCant descuento</div>
                <div className="cantidad">
                  <button className="decrement">-</button>
                  <input
                    type="number"
                    name="cantidadProducto"
                    className="cantidad-input"
                    min="1"
                    max="5"
                    step="1"
                    value="cantAgg"
                  ></input>
                  <button className="increment">+</button>
                </div>
                <form className="tallas">
                  <div className="talla">
                    <input
                      id="u"
                      type="checkbox"
                      name="talla"
                      value="u"
                    ></input>
                    <label className="tallaLabel" htmlFor="u" id="TallaU">
                      U
                    </label>
                  </div>
                  <div className="talla">
                    <input
                      id="s"
                      type="checkbox"
                      name="talla"
                      value="s"
                    ></input>
                    <label className="tallaLabel" htmlFor="s" id="TallaS">
                      S
                    </label>
                  </div>
                  <div className="talla">
                    <input
                      id="m"
                      type="checkbox"
                      name="talla"
                      value="m"
                    ></input>
                    <label className="tallaLabel" htmlFor="m" id="TallaM">
                      M
                    </label>
                  </div>
                  <div className="talla">
                    <input
                      id="l"
                      type="checkbox"
                      name="talla"
                      value="l"
                    ></input>
                    <label className="tallaLabel" htmlFor="l" id="TallaL">
                      L
                    </label>
                  </div>
                  <div className="talla">
                    <input
                      id="xl"
                      type="checkbox"
                      name="talla"
                      value="xl"
                    ></input>
                    <label className="tallaLabel" htmlFor="xl" id="TallaXL">
                      XL
                    </label>
                  </div>
                  <div className="talla">
                    <input
                      id="xxl"
                      type="checkbox"
                      name="talla"
                      value="xxl"
                    ></input>
                    <label className="tallaLabel" htmlFor="xxl" id="TallaXXL">
                      XXL
                    </label>
                  </div>
                </form>
              </div>
              <div className="actionProduct">
                <img
                  src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1713452676/proyects/vector/icons/delete_bawi7y.png"
                  className="btnEliminar"
                  alt="Eliminar producto"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="formularioEnvioPago" id="modal">
        <div className="formulario_content">
          <span className="cerrar" id="cerrar">
            &times;
          </span>
          <h4>Formulario de pago</h4>
          <form action="">
            <section className="section_contacto">
              <h5>1. Información de contacto</h5>
              <p>
                Usaremos este correo electrónico para enviarte detalles y
                actualizaciones relacionadas con tu pedido.
              </p>
              <input
                type="email"
                className="correo"
                id="correo"
                placeholder="Correo electrónico"
                required
              ></input>
              <input
                type="tel"
                name="numeroTelefono"
                id="numeroTelefono"
                placeholder="Teléfono Ejem. +56 9 xxxx xxxx"
                required
              ></input>
            </section>
            <section className="section_direccion">
              <h5>2. Dirección de envío</h5>
              <p>
                Introduce la dirección a dónde quieras que se entregue tu
                pedido.
              </p>
              <div className="nombreApellidos">
                <input
                  type="text"
                  name="nombres"
                  className="nombres"
                  id="nombres"
                  placeholder="Nombres"
                  required
                ></input>
                <input
                  type="text"
                  name="apellidos"
                  className="apellidos"
                  id="apellidos"
                  placeholder="Apellidos"
                  required
                ></input>
              </div>
              <select name="pais" id="pais">
                <option value="chile">CHILE</option>
              </select>
              <select name="region" id="region" autocomplete="given-name">
                <option value="">ANTOFAGASTA</option>
                <option value="">ARICA Y PARINACOTA</option>
                <option value="">ATACAMA</option>
                <option value="">
                  AYSÉN DEL GRAL. CARLOS IBÁÑEZ DEL CAMPO
                </option>
                <option value="">BIOBÍO</option>
                <option value="">COQUIMBO</option>
                <option value="">LA ARAUCANÍA</option>
                <option value="">LIBERTADOR GENERAL BERNARDO O'HIGGINS</option>
                <option value="">LOS LAGOS</option>
                <option value="">LOS RÍOS</option>
                <option value="">MAGALLANES Y DE LA ANTÁRTICA CHILENA</option>
                <option value="">MAULE</option>
                <option value="">METROPOLITANA DE SANTIAGO</option>
                <option value="">ÑIBLE</option>
                <option value="">TARAPACÁ</option>
                <option value="">VALPARAISO</option>
              </select>
              <input
                type="text"
                name="comuna"
                className="comuna"
                id="comuna"
                placeholder="Comuna"
                required
              ></input>
              <input
                type="text"
                name="direccion"
                className="direccion"
                id="direccion"
                placeholder="Ingresa tu dirección"
                required
              ></input>
              <input
                type="text"
                name="numeroDireccion"
                className="numeroDireccion"
                id="numeroDireccion"
                placeholder="Ingresa el numero de dirección"
                required
              ></input>
              <input
                type="text"
                name="numeroCasa"
                className="numeroCasa"
                id="numeroCasa"
                placeholder="Ejem. Casa 3, Dpto 101. (opcional)"
              ></input>
            </section>
            <section className="section_envio">
              <h5>3. Opciones de envío</h5>
              <fieldset>
                <legend>Selecciona como quieres recibir tu pedido</legend>

                <div className="checkEnvio">
                  <input
                    type="radio"
                    id="retiro"
                    name="opcionEnvio"
                    value="retiro"
                    checked
                  ></input>
                  <label htmlFor="retiro">Retiro en tienda.</label>
                </div>

                <div className="checkEnvio">
                  <input
                    type="radio"
                    id="envio"
                    name="opcionEnvio"
                    value="envio"
                  ></input>
                  <label htmlFor="envio">Envio Nacional</label>
                </div>
              </fieldset>
            </section>
            <section className="section_pago">
              <h5>4. Opciones de pago</h5>
              <fieldset>
                <legend>Selecciona el metodo de pago</legend>

                <div className="checkPago">
                  <input
                    type="radio"
                    id="tarjeta"
                    name="opcionPago"
                    value="tarjeta"
                    checked
                  ></input>
                  <label htmlFor="tarjeta">Tarjeta de débito/crédito.</label>
                </div>
                <div className="checkPago">
                  <input
                    type="radio"
                    id="transferencia"
                    name="opcionPago"
                    value="transferencia"
                  ></input>
                  <label htmlFor="transferencia">Transferencia bancaria.</label>
                </div>

                <div className="checkPago">
                  <input
                    type="radio"
                    id="mercadoPago"
                    name="opcionPago"
                    value="mercadoPago"
                  ></input>
                  <label htmlFor="mercadoPago">Mercado Pago.</label>
                </div>

                <div className="checkPago">
                  <input
                    type="radio"
                    id="contraEntrega"
                    name="opcionPago"
                    value="contraEntrega"
                  ></input>
                  <label htmlFor="contraEntrega">Contra entrega</label>
                </div>
              </fieldset>
              <label htmlFor="checknota" className="AggNota">
                <div>
                  <input type="checkbox" id="checknota"></input>
                  <span>Añade una nota a tu pedido</span>
                </div>
                <textarea
                  cols="30"
                  rows="10"
                  id="textNota"
                  placeholder="Escribe aqui la nota que desee agregar para tu pedido"
                ></textarea>
              </label>
              <div className="finalizarPago">
                <input type="checkbox" id="checkTerminosCondiciones"></input>
                <label htmlFor="checkTerminosCondiciones">
                  Al proceder con tu compra aceptas nuestros{" "}
                  <a href="">Términos y condiciones</a> y{" "}
                  <a href="">Política de privacidad</a>.
                </label>
              </div>
            </section>
            <section className="section_pagar">
              <input type="submit" value="Pagar"></input>
            </section>
          </form>
        </div>
      </div> */}
    </>
  );
};

export default Cart;
