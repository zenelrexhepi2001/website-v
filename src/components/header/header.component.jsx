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
            <li>
              <Link to="/" className="header-link">
                Developers
                <Dropdown />
              </Link>
            </li>
            <li>
              <Link to="/support" className="header-link">
                Support
                <Dropdown />
              </Link>
            </li>
            <li>
              <Link to="/services" className="header-link">
                Services
                <Dropdown />
              </Link>
            </li>
            <li>
              <Link to="/blog" className="header-link">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="header__elements-right">
          <Link to="/register" className="btn btn-light">
            Register
          </Link>
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
