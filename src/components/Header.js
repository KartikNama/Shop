import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="container-fluid navbar-fluid">
      <div className="container navbar">
        <div className="navbar__logo">
          <img src="/Shop/favicon.ico" alt="" />
        </div>
        <div className="navbar__menu">
          <div className="navbar__menu-links">
            <li>
              <Link className="link" to="/Shop">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/products">
                Products
              </Link>
            </li>
            <li>
              <Link className="link" to="/admin">
                Admin
              </Link>
            </li>
          </div>
          <div className="search">
            <button className="search-button">
            <img src="search.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
