import { Route, Routes } from "react-router-dom"

import Navigation from "./components/Navigation";
import Accueil from "./components/Accueil";
import Login from "./components/Login";
import Inscription from "./components/Inscription";
import Addproduct from "./components/Addproduct";

function App() {
  return (

    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Accueil />} />  
        <Route path="/login" element={<Login />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/add-product" element={<Addproduct />} />
      </Routes>
    </div>

  );
}

export default App;

