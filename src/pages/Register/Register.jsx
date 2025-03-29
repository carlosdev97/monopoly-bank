import React, { useState } from "react";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";
// import {
//   getFirestore,
//   doc,
//   setDoc,
//   collection,
//   query,
//   where,
//   getDocs,
// } from "firebase/firestore";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const auth = getAuth();
  // const db = getFirestore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Registering user...");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center flex-column vh-100 w-100">
      <div className="row w-100 d-flex justify-content-center align-items-center">
        <div className="col col-md-8 col-lg-6 bg-semi-transparent shadow-lg rounded-4 p-5">
          <h2 className="text-center">Registrarse</h2>
          <form
            className="d-flex flex-column gap-3 mt-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="form-control mb-3"
              id="inputUsername"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              className="form-control mb-3"
              id="inputEmail"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="form-control mb-3"
              id="inputPassword"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              className="form-control mb-3"
              id="inputConfirmPassword"
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary w-100">
              Registrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
