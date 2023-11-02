import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Accueil.css";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Details from "../components/Details";


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
    const ouvrirDetails = (item) => {
        
        console.log(item);
    }





    return (
        <div>
            <Link to="/add-product">
                <button>Ajouter un produit</button>
            </Link>
            <h1>Accueil - Liste des produits</h1>
            {loading ? (
                <p>Chargement en cours...</p>
            ) : (
                <div className="cards-container">
                    {Array.isArray(data) ? (
                        data.map((item, key) => (
                            <Link to={`/details`} key={key} onClick={() => ouvrirDetails(item)}>
                                
                                <Card                                    
                                    key={key}
                                    image={`images/${item.image}`}
                                    title={item.title}
                                    price={item.price}
                                    details={item.details}
                                    id={item.id}                                    
                                />
                            </Link>

                        ))
                    ) : (
                        <p>Les données ne sont pas un tableau valide.</p>
                    )}
                </div>
            )}

        </div>
    )
}

export default Accueil;
