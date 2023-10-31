import React, { useState } from "react";
import "../css/Addproduct.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Dropzone from 'react-dropzone';


function Addproduct() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [details, setDetails] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const handleDrop = (acceptedFiles) => {
        
        if (acceptedFiles.length > 0) {
          setImage(acceptedFiles[0].name);
        }
       
      };
      

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        formData.append('title', title);
        formData.append('price', price);
        formData.append('details', details);


        axios.post('http://localhost/api-php-react/ajout-produit', formData)
            .then((response) => {
                navigate('/')
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des données : " + error);
            });
    }
    return (
        <div className="Addproduct-page">
            <h2>Addproduct</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Image:</label>

                    <Dropzone onDrop={handleDrop} accept="image/*" single>
                        {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                {image ? <p>Image sélectionnée : {image.name}</p> : <p>Sélectionnez une image</p>}
                            </div>
                        )}
                    </Dropzone>
                </div>
                <div>
                    <label>Titre:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Prix:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <label>Détails:</label>
                    <textarea
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit">Enregistrer</button>
            </form>
        </div>
    )
}


export default Addproduct;
