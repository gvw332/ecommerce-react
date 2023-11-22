import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/Accueil.css";
import Card from "../components/Card";
import { UserContext } from "../App";
import { GetUrl } from "../App";


function Accueil() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const myUrl = useContext(GetUrl)
    const { user, setUser } = useContext(UserContext);
    const isAdmin = (user.niveau === 1);   
    
    console.log("user: " + user.pseudo); 
    useEffect(() => {        
        

            getProducts();   
    }, []);

    function getProducts() {
              
        axios.get(myUrl + '/produits/')
            .then( (response)=> {
               
                if (response.data){                    
                    setData(response.data);
                    console.log("Réponse success",data);
                    setLoading(false);
                }
            })
            .catch(function (error) {
                console.error("Erreur lors de la récupération des données : " + error);
            });
    }


    return (
        <div className="accueil">

            {isAdmin && <div className="btn-ajout-produit">
                <Link to="/add-product">
                    <button class="custom-btn btn-12"><span>+</span><span>Ajouter un produit</span></button>
                </Link></div>
            }

            <h1>Liste des produits</h1>
            {loading ? (
                <p>Chargement en cours...</p>
            ) : (
                <div className="cards-container">
                    {Array.isArray(data) ? (
                        data.map((item, key) => (

                            <div className="card-accueil">
                                <Card
                                    id={item.id}
                                    key={key}
                                    image={`images/${item.image}`}
                                    title={item.title}
                                    price={item.price}
                                    details={item.details}
                                    item={item}
                                />
                            </div>

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
