import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Accueil.css";

import { Link } from "react-router-dom";

function Accueil() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Utilisez Axios pour récupérer les données depuis votre API
        axios.get("http://localhost:80/api-php-react/produits")
            .then((response) => {
                setData(response.data); // Mettez à jour l'état avec les données reçues
                setLoading(false); // Mettez à jour l'état de chargement
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des données : " + error);
            });
    }, []); // Le tableau vide [] signifie que cela s'exécute une seule fois après le rendu initial
    const createProduct = () => {
        navigate = useNavigate("/addproduct");

    };





    return (
        <div>
            <Link to="/add-product">
                <button>Ajouter un produit</button>
            </Link>
            <h1>Accueil - Liste des produits</h1>
            {loading ? (
                <p>Chargement en cours...</p>
            ) : (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                        // Assurez-vous d'adapter la structure des données à votre cas d'utilisation
                    ))};
                </ul>
            )}
        </div>
    );
}

export default Accueil;
