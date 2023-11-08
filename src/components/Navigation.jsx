
import "../css/Navigation.css";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useUserContext } from "../App";

export default function Navigation() {
  const { totalItems } = useCart();
  const { user, setUser} = useUserContext();
  const isAuth = (user.niveau >=1);
  const { emptyCart } = useCart();

  const handleLogout = () => {
    // Utilisez window.confirm pour demander une confirmation à l'utilisateur
    const confirmLogout = window.confirm("Êtes-vous sûr de vouloir vous déconnecter ?");

    if (confirmLogout) {
      setUser({});
      emptyCart();
    }
  };


  return (
    <nav>

      <Link to="/" className="logo"></Link>
            
      <div className="auth">
      {(isAuth) && 
        <button onClick={handleLogout}>Déconnexion</button>        
      }
      {(!isAuth) && 
        <Link to="/login"><button>Connexion</button></Link>
      }
      {(!isAuth) && 
        <Link to="/inscription"><button>Inscription</button></Link>
      }
        <Link to="/panier"><button>Panier {totalItems}</button></Link>
       {user.pseudo}
      </div>
    </nav>
  );
}
