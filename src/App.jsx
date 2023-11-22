import React, { useState, createContext, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";

import Navigation from "./components/Navigation";
import Accueil from "./pages/Accueil";
import Login from "./pages/Login";
import Inscription from "./pages/Inscription";
import Addproduct from "./pages/Addproduct";
import Details from "./pages/Details";
import Panier from "./pages/Panier";
import Paiement from "./pages/Paiement";
import SuccessPaiement from "./pages/Success-Paiement";
import { Page404 } from "./pages/Page404";

export const GetUrl = createContext();
export const UserContext = createContext();

function App() {
  // const savedUser = JSON.parse(localStorage.getItem('user')) || {};
  const [user, setUser] = useState({}); // Définissez votre état utilisateur ici
  
  const apiUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:80/api-php-react'
      : 'https://api.gvw-tech.be/';

    

      useEffect(() => {
        try {
          // Récupération de l'utilisateur depuis le localStorage
          const savedUser = JSON.parse(localStorage.getItem('user'));
          if (savedUser) {
            setUser(savedUser);
          }
        } catch (error) {
          console.error("Erreur lors du chargement de l'utilisateur du localStorage", error);
          // Gérer l'erreur ou réinitialiser l'état 'user' si nécessaire
        }
      }, []);
    
      useEffect(() => {
        // Mise à jour du localStorage lorsque 'user' change
        localStorage.setItem('user', JSON.stringify(user));
      }, [user]);
    
  return (
    <div>
      <CartProvider>
        <GetUrl.Provider value={apiUrl}>
          <UserContext.Provider value={{ user, setUser }}>
            <Navigation />
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/login" element={<Login />} />
              <Route path="/inscription" element={<Inscription />} />
              <Route path="/add-product" element={<Addproduct />} />
              <Route path="/details/:title" element={<Details />} />
              <Route path="/panier" element={<Panier />} />
              <Route path="/paiement" element={<Paiement />} />
              <Route path="/success-paiement" element={<SuccessPaiement />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </UserContext.Provider>
        </GetUrl.Provider>
      </CartProvider>
    </div>
  );
}

export default App;

