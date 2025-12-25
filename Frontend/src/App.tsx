import { Route, Routes } from "react-router-dom";
import Acceuil from "./pages/chercheur/Acceuil";
import Login from "./pages/auth/Login";
import Favoris from "./pages/chercheur/Favoris";
import Candidatures from "./pages/chercheur/Candidatures";
import Detail from "./pages/chercheur/Detail";
import Dashboard from "./pages/recruteur/Dashboard";
import Offres from "./pages/recruteur/Offres";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Acceuil />} />
      <Route path="/offres/:id" element={<Detail />} />
      <Route path="/favoris" element={<Favoris />} />
      <Route path="/candidatures" element={<Candidatures />} />

      <Route path="/recruteur/dashboard" element={<Dashboard />} />
      <Route path="/recruteur/offres" element={<Offres />} />
    </Routes>
  );
}

export default App;
