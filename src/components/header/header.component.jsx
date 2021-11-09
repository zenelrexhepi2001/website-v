import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoHeader } from "../../assets/images/logo.svg";
import { ReactComponent as Dropdown } from "../../assets/images/dropdown.svg";

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header__elements">
        <div className="header__links">
        <div className="header__logo">
          <Link to="/">
            <LogoHeader />
          </Link>
        </div>
          <ul>
            <Link to="/" className="header-link">
              Developers
              <Dropdown />
            </Link>
            <Link to="/" className="header-link">
              Support
              <Dropdown />
            </Link>
            <Link to="/" className="header-link">
              Services
              <Dropdown />
            </Link>
            <Link to="/" className="header-link">
              Blog
            </Link>
          </ul>
        </div>
       <div className="header__elements-right">
       <Link to='/' className="btn btn-light">Register</Link>
       <Link to='/' className="btn btn-primary">Login</Link>
       </div>
      </div>
    </div>
  </header>
);

export default Header;
