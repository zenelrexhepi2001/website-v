import React from "react";
import { Link,withRouter } from "react-router-dom";
import { ReactComponent as LogoHeader } from "../../assets/images/logo.svg";
import { ReactComponent as Dropdown } from "../../assets/images/dropdown.svg";
import DropdownItem from "../dropdown-item/dropdown-item.component";

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
              <Link to="/developers" className="header-link">
                Developers
                <Dropdown />
                </Link>
                <ul className="dropdown">
                  <li>
                    <Link to='/developers' className="dropdown-item">API</Link>
                    <Link to='/' className="dropdown-item">SDK</Link>
                  </li>
                </ul>
            </li>
            <li>
              <Link to="/article-support" className="header-link">
                Support
                <Dropdown/>
              </Link>
              <ul className="dropdown">
                  <li>
                    <Link to='/faq-support' className="dropdown-item">FAQ Support</Link>
                    <Link to='/article-support' className="dropdown-item">Article Support</Link>
                    <Link to='/contact-support' className="dropdown-item">Connected Contact Support</Link>
                    <Link to='/live-chat-support' className="dropdown-item">Live Chat Support</Link>
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
                    <Link to='/' className="dropdown-item">Services</Link>
                    <Link to='/services' className="dropdown-item">Login & Checkout</Link>
                    <Link to='/services' className="dropdown-item">Scan & Go</Link>
                    <Link to='/services' className="dropdown-item">Live Chat Support</Link>
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

export default withRouter(Header);
