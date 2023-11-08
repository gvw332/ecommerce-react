import React from 'react';
import "../css/Card.css";
import { useCart } from 'react-use-cart';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
  const { addItem } = useCart();
  const navigate = useNavigate();
  const handleDetails = (id) => {
    navigate('/details/' + id);
  };
  return (

    <div className="card">
      <div onClick={() => handleDetails(props.id)} className='click-pour-details'>        
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.price} €</p>
      </div>
      <button onClick={() => addItem(props.item)}>Ajouter au panier</button>
    </div>
  );


};

export default Card;