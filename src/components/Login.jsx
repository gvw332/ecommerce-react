import React, { useState } from "react";
import "./css/Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Logique de connexion ici (par exemple, envoi des données au serveur)
    };

    return (
        <div className="login-page">
            <h2>Connexion</h2>
            <form>
                <div className="champ-email">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="champ-mdp">
                    <label>Mot de passe</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={handleLogin}>Se connecter</button>
            </form>
        </div>
    );
}

export default Login;


