import React from "react";
import { Link } from "react-router-dom";
import DropdownItem from "../dropdown-item/dropdown-item.component";

class DropdownParent extends React.Component {
  constructor() {
    super();

    this.state = {
      Datadropdown: [
        {
          id: 1,
          linkitemOne: "API",
          linkitemTwo: "SDK",
          show: "opacity",
        },
        {
          id: 2,
          linkitemOne: "Introduction",
          linkitemTwo: "Authertication",
          linkitemThree: "Connected Accounts",
          linkitemFour: "Errors",
          linkitemFive: "Pagination",
          linkitemSix: "API Request",
          linkitemSeven: "Something",
          linkitemEight: "Something",
          show: "opacity",
        },
      ],
    };
  }
  render() {
    return (
      <div className="dropdown">
        <div className="dropdown-menu">
          <ul>
              <li><Link to='/'></Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default DropdownParent;
