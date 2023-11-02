import React from 'react';
import "../css/Details.css";



const Details = ({ id, image, title, price, details, addToCart }) => {
   
  return (
    
    <div className="details">
        
      <img src={image} />
      <h3>{title}</h3>
      <p>{price} €</p>   
      <p>{details}</p>         
      <button onClick={addToCart}>Ajouter au panier</button>
    </div>
  );

  
};

export default Details;