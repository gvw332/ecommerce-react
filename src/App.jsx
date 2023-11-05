import { Route, Routes } from "react-router-dom"
import { CartProvider } from "react-use-cart";

import Navigation from "./components/Navigation";
import Accueil from "./components/Accueil";
import Login from "./components/Login";
import Inscription from "./components/Inscription";
import Addproduct from "./components/Addproduct";
import Details from "./components/Details";
import Panier from "./components/Panier";

function App() {
  return (

    <div>
      <CartProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/add-product" element={<Addproduct />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/panier" element={<Panier />} />
        </Routes>
      </CartProvider>
    </div >

  );
}

export default App;

