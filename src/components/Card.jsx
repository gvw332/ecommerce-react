import React from 'react';
import "../css/Card.css";



const Card = ({ image, title, price, details }) => {
  const addToCart = () => {
    // Logique pour ajouter au panier
  };

  return (
    
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price} €</p>      
      <button onClick={addToCart}>Ajouter au panier</button>
    </div>
  );
};

export default Card;