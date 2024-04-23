import { useEffect, useState } from "react";
import Counter from "./Counter";

const CounterContainer = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    setContador(contador + 1);
  }, []);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  let objectProps = {
    restar,
    sumar,
    contador,
  };

  return <Counter {...objectProps} />;
};

export default CounterContainer;
