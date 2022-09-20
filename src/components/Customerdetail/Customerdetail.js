import React, { Component } from "react";

import {
  BrowserRouter as BrowserRouter,
  Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import "./Customerdetail.css";

import searchicon from "./images/searchicon.png";
import calendarsample from "./images/calendarsample.png";

class Customerdetail extends Component {
  render() {
    return (
      <div className="customerdetail-container">
        <div className="page-header-back">
          <span>&#60;</span>
          Summary
        </div>

        <div className="company-summary">
          {/*start:summary-item*/}
          <div className="company-summary-item">
            <div className="company-summary-item-leftpart">
              <div className="company-summaryitem-top">Haircut | Regular</div>
              <div className="company-summaryitem-bottom">$39.15</div>
            </div>
            <div className="company-summary-item-rightpart">
              <div className="increment-decrement-box">
                <a
                  href="javascript:void(0)"
                  className="incrementcount"
                  style={{ border: "1px solid #00f" }}
                >
                  +
                </a>
                <div className="setcountdata">1</div>
                <a href="javascript:void(0)" className="decrementcount">
                  -
                </a>
              </div>

              <div className="company-summaryitem-rightbottom">$39.15</div>
            </div>
          </div>
          {/*end:summary-item*/}

          {/*start:summary-item*/}
          <div className="company-summary-item">
            <div className="company-summary-item-leftpart">
              <div className="company-summaryitem-top">Haircut | Regular</div>
              <div className="company-summaryitem-bottom">$39.15</div>
            </div>
            <div className="company-summary-item-rightpart">
              <div className="increment-decrement-box">
                <a href="javascript:void(0)" className="incrementcount">
                  +
                </a>
                <div className="setcountdata">1</div>
                <a href="javascript:void(0)" className="decrementcount">
                  -
                </a>
              </div>

              <div className="company-summaryitem-rightbottom">$39.15</div>
            </div>
          </div>
          {/*end:summary-item*/}

          {/*start:Grand Total*/}
          <div className="company-summary-grandtotal">
            <div className="company-summary-grandtotal-leftpart">
              <span>Grand Total</span>
            </div>
            <div className="company-summary-grandtotal-rightpart">
              <div className="company-summary-grandtotal-top">$73.15</div>
              <div className="company-summary-grandtotal-bottom">+ Taxes</div>
            </div>
          </div>
          {/*end:Grand Total*/}
        </div>

        <div className="company-date-heading">
          <h4>Date</h4>
        </div>
        <div className="company-calendar-section">
          <img src={calendarsample} alt="calendarsample" />
        </div>
        <div className="company-calendar-resultoutput">June 07 | 1:00 PM</div>

        <div className="bookappointment-link">
          <a href="javascript:void(0)" className="bookappointment-btn">
            Book Appointment
          </a>
        </div>

        {/*start:popup content*/}
        <div className="popup-fullcontent">
          <div className="popup-content">
            <div className="popup-header">
              <h4>Customer Details</h4>
            </div>
            <div className="popup-body">
              <div className="popup-customer-detail">
                <form>
                  <div className="popup-customerdetail-row">
                    <label>
                      Name<span>*</span>
                    </label>
                    <input type="text" />
                  </div>
                  <div className="popup-customerdetail-row">
                    <label>Email ID</label>
                    <input type="email" />
                  </div>
                  <div className="popup-customerdetail-row">
                    <label>
                      Contact Number <span>*</span>
                    </label>
                    <input type="tel" />
                  </div>

                  <div className="popup-customerdetail-checkbox">
                    <input
                      type="checkbox"
                      ID="whatsapp"
                      name="whatsapp"
                      value="Boat"
                    />
                    <label for="whatsapp">Is this your whatsapp number?</label>
                  </div>

                  <div className="popup-customerdetail-row">
                    <Link to="/confirmation" className="popup-confirm-btn">
                      Confirm
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*end:popup content*/}
      </div>
    );
  }
}

export default Customerdetail;
