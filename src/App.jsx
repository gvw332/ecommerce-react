import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";

import Navigation from "./components/Navigation";
import Accueil from "./components/Accueil";
import Login from "./components/Login";
import Inscription from "./components/Inscription";
import Addproduct from "./components/Addproduct";
import Details from "./components/Details";
import Panier from "./components/Panier";
import { Page404 } from "./components/Page404";


// Créez un contexte pour l'état de l'utilisateur
const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState({}); // Définissez votre état utilisateur ici

  return (
    <div>
      <CartProvider>
        <UserContext.Provider value={{ user, setUser }}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/login" element={<Login />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/add-product" element={<Addproduct />} />
            <Route path="/details/:title" element={<Details />} />
            <Route path="/panier" element={<Panier />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </UserContext.Provider>
      </CartProvider>
    </div>
  );
}

export default App;

// Utilisez ce hook personnalisé pour accéder à l'état utilisateur dans vos composants
export function useUserContext() {
  return React.useContext(UserContext);
}