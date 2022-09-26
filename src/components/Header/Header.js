import React from 'react'
import { Link, useHistory } from "react-router-dom";

import "./Header.css";

import companylogo from "./images/companylogo.png";
import carticon from "./images/carticon.png";

function Header(props) {
  const history = useHistory();
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
            <Link  onClick={() =>
                history.push("/summaryslotselection/", {
                  state: {
                    cartVal: props.product.length,
                    product: props.product
                  },
                })
              } className="header-carticon">
              {props.count ? <span
                className="header-carticon-amount"
                style={{ color: "#fff" }}
              >
                {props.count}
              </span> : <div></div>
              }
              <img className="carticon" src={carticon} alt="carticon" />
            </Link>
          </div>
        </div>
      </header>
  )
}

export default Header;


