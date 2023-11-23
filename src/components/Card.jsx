import React, { useContext } from 'react';
import "../css/Card.css";
import { useCart } from 'react-use-cart';
import { useNavigate } from 'react-router-dom';
import { GetUrl } from '../App'; // Chemin mis à jour

const Card = (props) => {
  const myUrl = useContext(GetUrl);
  const { addItem } = useCart();
  const navigate = useNavigate();
  
  const handleDetails = (title) => {
    navigate('/details/' + title);
  };
  
  return (
    <div className="card">
      <div onClick={() => handleDetails(props.title)} className='click-pour-details'>        
        <img src={`${myUrl}/public/${props.image}`} alt={props.title} />
        
        <h3>{props.title}</h3>
        <p>{props.price} €</p>
      </div>
      <button onClick={() => addItem(props.item)}>Ajouter au panier</button>
    </div>
  );
};

export default Card;