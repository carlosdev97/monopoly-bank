import React from "react";

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center flex-column vh-100 w-100">
      <div className="row w-100 d-flex justify-content-center align-items-center">
        <div className="col col-md-8 col-lg-6 bg-semi-transparent shadow-lg rounded-4 p-5">
          <h2 className="text-center">Iniciar sesión</h2>
          <form className="d-flex flex-column gap-3 mt-4">
            <input
              type="email"
              className="form-control mb-3"
              id="inputEmail"
              placeholder="Correo electrónico"
              required
            />
            <input
              type="password"
              className="form-control mb-3"
              id="inputPassword"
              placeholder="Contraseña"
              required
            />
            <button type="submit" className="btn btn-primary w-100">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
