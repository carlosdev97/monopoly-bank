import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Transaction from "./pages/transaction";
import Login from "./components/login";
import useUsuario from "./hooks/useUsuario";
import Home from "./components/Home";
function App() {
  const usuario = useUsuario()
  return (
    <Router>
      <Routes>
        <Route path="/" element={usuario ? <Home /> : <Login />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </Router>
  );
}

export default App;
