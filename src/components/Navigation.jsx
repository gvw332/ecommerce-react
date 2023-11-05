
import "../css/Navigation.css";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

export default function Navigation() {
  const { totalItems } = useCart();

  return (
    <nav>
      <div className="logo"><Link to="/">Mon Logo</Link></div>
      <div className="auth">
        <Link to="/login"><button>Connexion</button></Link>
        <Link to="/inscription"><button>Inscription</button></Link>
        <Link to="/panier"><button>Panier {totalItems}</button></Link>

      </div>
    </nav>
  );
}
