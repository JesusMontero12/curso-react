import "./Counter.css";

const Counter = ({ restar, sumar, contador }) => {
  return (
    <>
      <div className="BtnsSumarRestar">
        <h1>Cantidad:</h1>
        <button onClick={restar}>-</button>
        <h2>{contador}</h2>
        <button onClick={sumar}>+</button>
      </div>
    </>
  );
};

export default Counter;
