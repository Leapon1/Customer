import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import companylogo from "./images/companylogo.png";
// import mobilebar from "./images/mobilebar.png";
import carticon from "./images/carticon.png";

class MyHeader extends Component {
    // constructor(props) {
    //   super(props);
    // }
  render() {
    return (
      <header className="header-container">
        <div className="header-inner-section">
          <div className="header-leftpart">
            <Link to="/">
              <img src={companylogo} alt="companylogo" />
            </Link>
          </div>
          <div className="header-middlepart">DUKE</div>
          <div className="header-rightpart">
            <span className="header-carticon">
              <span
                className="header-carticon-amount"
                style={{ color: "#fff" }}
              >
                {this.props.count}
              </span>
              <img src={carticon} alt="carticon" />
            </span>
          </div>
        </div>
      </header>
    );
  }
}

export default MyHeader;
