import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import companylogo from "./images/companylogo.png";
import carticon from "./images/carticon.png";

class MyHeader extends Component {
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
            <Link to='/' className="header-carticon">
              { this.props.count ? <span
                className="header-carticon-amount"
                style={{ color: "#fff" }}
              >
                {this.props.count}
              </span> : <div></div>

              }
              
              <img className="carticon" src={carticon} alt="carticon" />
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default MyHeader;
