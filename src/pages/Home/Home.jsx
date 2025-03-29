import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center flex-column vh-100 w-100">
      <div className="row">
        <div className="col d-flex flex-column justify-content-center align-items-center gap-3">
          <h1 className="">¡Bienvenido a Monopoly Bank!</h1>
          <p className="fs-5">Por favor elija una opción</p>
          <div className="d-flex gap-3">
            <Link
              to="/register"
              className="btn btn-primary mt-3 px-5 rounded-5 fs-5"
            >
              Registrarse
            </Link>
            <Link
              to="/login"
              className="btn btn-secondary mt-3 px-5 rounded-5 fs-5"
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
