import { Route, Routes } from "react-router-dom";
import Acceuil from "./pages/chercheur/Acceuil";
import Login from "./pages/auth/Login";
import Favoris from "./pages/chercheur/Favoris";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Acceuil />} />
      <Route path="/favoris" element={<Favoris />} />
    </Routes>
  );
}

export default App;
