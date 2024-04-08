import { useState } from "react";

const Counter = () => {
  const contador = useState();

  const sumar = () => {
    console.log("hola");
  };

  const restar = () => {
    console.log("chao");
  };

  return (
    <>
      <button onClick={sumar}>+</button>
      <h1>0</h1>
      <button onClick={restar}>-</button>
    </>
  );
};

export default Counter;
