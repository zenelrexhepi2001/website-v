import React from 'react';


class DropdownItem extends React.Component {
    

    render() {
        return (
            <ul className="nav__submenu">
            <li className="nav__submenu-item ">
              <a>Our Company</a>
            </li>
            <li className="nav__submenu-item ">
              <a>Our Team</a>
            </li>
            <li className="nav__submenu-item ">
              <a>Our Portfolio</a>
            </li>
          </ul>
        )
    }
}

export default DropdownItem;