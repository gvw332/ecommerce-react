import { useState, useEffect, useContext } from "react";
import React from 'react';
import "../css/Details.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GetUrl } from '../App'; // Chemin mis à jour
import { useCart } from 'react-use-cart';

const Details = () => {
  const myUrl = useContext(GetUrl);
  const [details, setDetails] = useState({})
  const { title } = useParams();
  const navigate = useNavigate();
  const formData = new FormData();
  const { addItem } = useCart();
  const [shouldFetchProducts, setShouldFetchProducts] = useState(false);
  formData.append('title', title);
  useEffect(() => {
    getProduct()
  }, []);

  // console.log(`${myUrl}/detail/`, 21);

  function getProduct() {
    axios.post(`${myUrl}/detail/`, formData)
    

      .then(function (response) {
        // console.log(response.data);
        if (response.data === 'N\'existe pas') {
          navigate('/Page404/');
        } else {
          setDetails(response.data);
        }

      }).catch(function (error) {
        console.log(error);
      });
  }


  const handleContextMenu = (e) => {
    e.preventDefault();
  };


  return (

    <div className="details">

      <img onContextMenu={handleContextMenu} src={`${myUrl}/public/images/${details.image}`} />
      <h3>{details.title}</h3>
      <p>{details.price} €</p>

      {details && <p dangerouslySetInnerHTML={{ __html: details.details }}></p>}
      <button onClick={() => addItem(details)}>Ajouter au panier</button>
    </div>
  );


};

export default Details;