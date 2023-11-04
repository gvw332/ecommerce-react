import { useState, useEffect } from "react";
import React from 'react';
import "../css/Details.css";
import { useParams } from "react-router-dom";
import axios from "axios";


const Details = () => {
  const [details, setDetails] = useState({})
  const { id } = useParams();
  const formData = new FormData();
  formData.append('id', id);
  useEffect(() => {
    getProduct()
  }, []);

  function getProduct() {
    axios.post('http://localhost:80/api-php-react/detail/', formData).then(function (response) {
      console.log(response);
      setDetails(response.data);
    }).catch(function (error) {
      console.log(error);
    });
  }
  function addToCart() {
    console.log('Adding to cart');
  }
  return (

    <div className="details">

      <img src={'/images/' + details.image} />
      <h3>{details.title}</h3>
      <p>{details.price} €</p>
      <p>{details.details}</p>
      <button onClick={addToCart}>Ajouter au panier</button>
    </div>
  );


};

export default Details;