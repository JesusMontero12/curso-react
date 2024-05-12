import React, { useContext, useState } from "react";
import "./Checkout.css";
import { CartContex } from "../../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContex);
  const [orderId, setOrderId] = useState(null);
  let total = getTotalPrice();
  const [info, setInfo] = useState({
    email: "",
    telefono: "",
    nombres: "",
    apellidos: "",
    pais: "",
    region: "",
    comuna: "",
    direccion: "",
    nDireccion: "",
    nCasa: "",
    opcionEnvio: "",
    opcionPago: "",
    addNota: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      buyer: info,
      items: cart,
      total: total.toFixed(3),
    };

    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, obj)
      .then((res) => setOrderId(res.id))
      .catch((error) => console.log(error));

    cart.forEach((product) => {
      let productCollection = collection(db, "products");
      let refDoc = doc(productCollection, product.id);
      updateDoc(refDoc, { stock: product.stock - product.cantidad });
    });
    clearCart();
  };

  return (
    <>
      <div className="formularioEnvioPago" id="modal">
        {orderId ? (
          <div className="containerNumberOrder">
            <h1>
              El número de su orden es: <span>{orderId}</span>
            </h1>
            <Link to="/products">Ver mas productos</Link>
          </div>
        ) : (
          <div className="formulario_content">
            <h4>Formulario de pago</h4>
            <form onSubmit={handleSubmit}>
              <section className="section_contacto">
                <h5>1. Información de contacto</h5>
                <p>
                  Usaremos este correo electrónico para enviarte detalles y
                  actualizaciones relacionadas con tu pedido.
                </p>
                <input
                  type="email"
                  name="email"
                  className="correo"
                  placeholder="Correo electrónico"
                  required
                  onChange={handleChange}
                ></input>
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono Ejem. +56 9 xxxx xxxx"
                  required
                  onChange={handleChange}
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
                    onChange={handleChange}
                  ></input>
                  <input
                    type="text"
                    name="apellidos"
                    className="apellidos"
                    id="apellidos"
                    placeholder="Apellidos"
                    required
                    onChange={handleChange}
                  ></input>
                </div>
                <select name="pais" id="pais" onClick={handleChange}>
                  <option value="chile" name="chile">
                    CHILE
                  </option>
                </select>
                <select name="region" id="region" onClick={handleChange}>
                  <option name="antofagasta">ANTOFAGASTA</option>
                  <option name="arica y parinacota">ARICA Y PARINACOTA</option>
                  <option name="atacama">ATACAMA</option>
                  <option name="aysen del gral. carlos ibanez del campo">
                    AYSÉN DEL GRAL. CARLOS IBÁÑEZ DEL CAMPO
                  </option>
                  <option name="biobio">BIOBÍO</option>
                  <option name="coquimbo">COQUIMBO</option>
                  <option name="la araucania">LA ARAUCANÍA</option>
                  <option name="libertador general bernardo ohiggins">
                    LIBERTADOR GENERAL BERNARDO O'HIGGINS
                  </option>
                  <option name="los lagos">LOS LAGOS</option>
                  <option name=" los rios">LOS RÍOS</option>
                  <option name="magallanes y de la antartica chilena">
                    MAGALLANES Y DE LA ANTÁRTICA CHILENA
                  </option>
                  <option name="maule">MAULE</option>
                  <option name="rm santiago">METROPOLITANA DE SANTIAGO</option>
                  <option name="nible">ÑIBLE</option>
                  <option name="tarapaca">TARAPACÁ</option>
                  <option name="valparaiso">VALPARAISO</option>
                </select>
                <input
                  type="text"
                  name="comuna"
                  className="comuna"
                  placeholder="Comuna"
                  required
                  onChange={handleChange}
                ></input>
                <input
                  type="text"
                  name="direccion"
                  className="direccion"
                  placeholder="Ingresa tu dirección"
                  required
                  onChange={handleChange}
                ></input>
                <input
                  type="text"
                  name="nDireccion"
                  className="numeroDireccion"
                  placeholder="Ingresa el numero de dirección"
                  required
                  onChange={handleChange}
                ></input>
                <input
                  type="text"
                  name="nCasa"
                  className="numeroCasa"
                  placeholder="Ejem. Casa 3, Dpto 101. (opcional)"
                  onChange={handleChange}
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
                      defaultChecked={true}
                      onChange={handleChange}
                    ></input>
                    <label htmlFor="retiro">Retiro en tienda.</label>
                  </div>

                  <div className="checkEnvio">
                    <input
                      type="radio"
                      id="envio"
                      name="opcionEnvio"
                      value="envio"
                      onChange={handleChange}
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
                      defaultChecked={true}
                      onChange={handleChange}
                    ></input>
                    <label htmlFor="tarjeta">Tarjeta de débito/crédito.</label>
                  </div>
                  <div className="checkPago">
                    <input
                      type="radio"
                      id="transferencia"
                      name="opcionPago"
                      value="transferencia"
                      onChange={handleChange}
                    ></input>
                    <label htmlFor="transferencia">
                      Transferencia bancaria.
                    </label>
                  </div>

                  <div className="checkPago">
                    <input
                      type="radio"
                      id="mercadoPago"
                      name="opcionPago"
                      value="mercadoPago"
                      onChange={handleChange}
                    ></input>
                    <label htmlFor="mercadoPago">Mercado Pago.</label>
                  </div>

                  <div className="checkPago">
                    <input
                      type="radio"
                      id="contraEntrega"
                      name="opcionPago"
                      value="contraEntrega"
                      onChange={handleChange}
                    ></input>
                    <label htmlFor="contraEntrega">Contra entrega</label>
                  </div>
                </fieldset>
                <div htmlFor="checknota" className="AggNota">
                  <div>
                    <span>Añade una nota a tu pedido</span>
                  </div>
                  <textarea
                    cols="30"
                    rows="10"
                    id="textNota"
                    name="addNota"
                    placeholder="Escribe aqui la nota que desee agregar para tu pedido"
                    onChange={handleChange}
                  ></textarea>
                </div>
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
        )}
      </div>
    </>
  );
};

export default Checkout;
