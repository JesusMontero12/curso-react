import { useState } from "react";
import Counter from "./Counter";
import Swal from "sweetalert2";

const CounterContainer = ({ idFav, stock, initial = 1, onAdd, onAddFav }) => {
  const [contador, setContador] = useState(initial);

  const messageAlert = (msj) => {
    Swal.fire({
      title: "¡Vaya!",
      text: msj,
      icon: "warning",
    });
  };

  const sumar = () => {
    contador < stock
      ? setContador(contador + 1)
      : messageAlert(
          `Limite de stock, solo nos quedan ${stock} unidad(es) disponible(s).`
        );
  };

  const restar = () => {
    contador > 1
      ? setContador(contador - 1)
      : messageAlert("no puedes comprar menos de 1 producto");
  };

  let objectProps = {
    idFav,
    sumar,
    restar,
    contador,
    onAdd,
    onAddFav,
  };

  return <Counter {...objectProps} />;
};

export default CounterContainer;
