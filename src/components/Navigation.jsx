
import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <div className="logo"><Link to="/">Mon Logo</Link></div>
      <div className="auth">
        <Link to="/login"><button>Connexion</button></Link>
        <Link to="/inscription"><button>Inscription</button></Link>
      </div>
    </nav>
  );
}
