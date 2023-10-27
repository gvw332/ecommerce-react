import React, { useState } from "react";
import "./Inscription.css";

function Inscription() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInscription = () => {
    // Logique d'inscription ici (par exemple, envoi des données au serveur)
  };

  return (
    <div className="inscription-page">
      <h2>Inscription</h2>
      <form>
        <div className="champ-prenom">
          <label>Prénom</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="champ-nom">
          <label>Nom</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="champ-email">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="champ-mdp">
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleInscription}>S'inscrire</button>
      </form>
    </div>
  );
}

export default Inscription;
