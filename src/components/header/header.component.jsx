import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as LogoHeader } from "../../assets/images/logo.svg";
import { ReactComponent as Dropdown } from "../../assets/images/dropdown.svg";
import DropdownItem from "../dropdown-item/dropdown-item.component";
import { UserActions } from "../../redux/user/user-actions";

const Header = ({ UserActions }) => {
  const [colorChange, setColorchange] = useState(false);
  const changeHeadercolor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeHeadercolor);

  return (
    <header className={colorChange ? "header colorChange" : "header"}>
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
                <Link to="/developers" className="header-link">
                  Developers
                  <Dropdown />
                </Link>
                <ul className="dropdown">
                  <li>
                    <Link to="/developers" className="dropdown-item">
                      API<span className="mdi mdi-chevron-right"></span>
                    </Link>
                    <Link to="/" className="dropdown-item">
                      SDK<span className="mdi mdi-chevron-right"></span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/article-support" className="header-link">
                  Support
                  <Dropdown />
                </Link>
                <ul className="dropdown">
                  <li>
                    <Link to="/faq-support" className="dropdown-item">
                      FAQ Support<span className="mdi mdi-chevron-right"></span>
                    </Link>
                    <Link to="/article-support" className="dropdown-item">
                      Article Support
                      <span className="mdi mdi-chevron-right"></span>
                    </Link>
                    <Link to="/contact-support" className="dropdown-item">
                      Connected Contact Support
                      <span className="mdi mdi-chevron-right"></span>
                    </Link>
                    <Link to="/live-chat-support" className="dropdown-item">
                      Live Chat Support
                      <span className="mdi mdi-chevron-right"></span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/services" className="header-link">
                  Services
                  <Dropdown />
                </Link>
                <ul className="dropdown">
                  <li>
                    <Link to="/" className="dropdown-item">
                      Services<span className="mdi mdi-chevron-right"></span>
                    </Link>
                    <Link to="/services" className="dropdown-item">
                      Login & Checkout
                      <span className="mdi mdi-chevron-right"></span>
                    </Link>
                    <Link to="/services" className="dropdown-item">
                      Scan & Go<span className="mdi mdi-chevron-right"></span>
                    </Link>
                    <Link to="/chatting-advisor" className="dropdown-item">
                      Live Chat Support
                      <span className="mdi mdi-chevron-right"></span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/blog" className="header-link">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="header__elements-right">
            <Link
              to="/register"
              className="btn btn-light"
              onClick={UserActions}
            >
              Register
            </Link>
            <Link to="/login" className="btn btn-primary" onClick={UserActions}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const Maptodispatch = (dispatch) => ({
  UserActions: () => dispatch(UserActions()),
});

export default connect(null, Maptodispatch)(Header);
