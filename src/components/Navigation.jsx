
import "../css/Navigation.css";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useUserContext } from "../App";

export default function Navigation() {
  const { totalItems } = useCart();
  const { user, setUser } = useUserContext();
  return (
    <nav>
      <Link to="/" className="logo"></Link>
      <div className="auth">
        <Link to="/login"><button>Connexion</button></Link>
        <Link to="/inscription"><button>Inscription</button></Link>
        <Link to="/panier"><button>Panier {totalItems}</button></Link>
        {user.pseudo}
      </div>
    </nav>
  );
}
