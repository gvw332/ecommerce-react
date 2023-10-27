import { Route, Routes } from "react-router-dom"

import Navigation from "./components/Navigation";
import Accueil from "./components/Accueil";
import Login from "./components/Login";
import Inscription from "./components/Inscription";

function App() {
  return (

    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Accueil />} />  
        <Route path="/login" element={<Login />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </div>

  );
}

export default App;

