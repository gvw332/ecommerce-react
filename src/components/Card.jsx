import React from 'react';
import "../css/Card.css";
import { useCart } from 'react-use-cart';


const Card = (props) => {
  const { addItem } = useCart();

  return (

    <div className="card">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.price} €</p>
      <button onClick={() => addItem(props.item)}>Ajouter au panier</button>
    </div>
  );


};

export default Card;