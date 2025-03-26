import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Transaction from "./pages/transaction";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Monopoly Bank Components! 🤑</h1>} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </Router>
  );
}

export default App;
