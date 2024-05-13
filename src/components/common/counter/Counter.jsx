import { useContext } from "react";
import "./Counter.css";
import Swal from "sweetalert2";
import { FavoritesContext } from "../../../context/FavoritesContext";

const Counter = ({ idFav, sumar, restar, contador, onAdd, onAddFav }) => {
  const { fav } = useContext(FavoritesContext);
  const message = (msj) => {
    Swal.fire({
      icon: "success",
      title: "¡Genial!",
      text: msj,
      showConfirmButton: false,
      timer: 3500,
    });
  };
  return (
    <>
      <div className="containerCounter">
        <div className="BtnsSumarRestar">
          <h1>Cantidad:</h1>
          <button onClick={restar}>-</button>
          <h2 className="labelCounter">{contador}</h2>
          <button onClick={sumar}>+</button>
        </div>
        <div className="btnAction">
          <button
            onClick={() => {
              onAdd(contador);
              message("El producto se ha agregado al carrito correctamente");
            }}
            className="btnAdd"
          >
            agregar
          </button>
          <button
            onClick={() => {
              onAddFav(idFav);
            }}
            className="btnAddFav"
          >
            {fav.some((product) => product.id === idFav && product.Add) ? (
              <img
                src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1715541369/proyects/vector/icons/heart-color_zu8hzf.png"
                alt="Favorito"
              />
            ) : (
              <img
                src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493193/proyects/vector/icons/heart_xb3q16.png"
                alt="No Favorito"
              />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
