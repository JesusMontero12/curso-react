import "./Login.css";
const Login = () => {
  return (
    <>
      <div className="contentLogin">
        <div className="login">
          <h1>Regístrate</h1>
          <form action="">
            <input
              type="text"
              name="userLogin"
              placeholder="Número celular  o Correo electronico"
            />
            <button>CONFIRMAR</button>
          </form>
          <div className="InicioRapido">
            <h2>Inicio rápido</h2>
            <div className="btnLoginApi">
              <a href="#">
                <img src="../assets/icons/google.png" alt=""></img>
              </a>
              <a href="#">
                <img src="../assets/icons/facebook.png" alt=""></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
