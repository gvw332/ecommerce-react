
import "../css/Navigation.css";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useUserContext } from "../App";
import { PiShoppingCartBold } from "react-icons/pi";


export default function Navigation() {
  const { totalItems } = useCart();
  const { user, setUser } = useUserContext();
  const isAuth = (user.niveau >= 1)
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
          <div className="bienvenu"><h5>Bienvenu </h5>
            {user.pseudo}
          </div>
        }
        {(isAuth) &&
          <button onClick={handleLogout}>Déconnexion</button>
        }
        {(!isAuth) &&
          <Link to="/login"><button>Connexion</button></Link>
        }
        {(!isAuth) &&
          <Link to="/inscription"><button>Inscription</button></Link>
        }
        <div className="bouton-panier-compteur">
          <Link to="/panier" className="cart-button"><PiShoppingCartBold /> {totalItems}</Link>
        </div>
      </div>
    </nav>
  );
}
