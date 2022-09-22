import React, { Component } from "react";
import * as moment from "moment";

import { Link } from "react-router-dom";

import "./Confirmation.css";

// import searchicon from "./images/searchicon.png";
import countnumbercheck from "./images/countnumbercheck.png";

class Confirmation extends Component {
  state = {
    dateTime: "",
  };

  componentDidMount() {
    this.setState({
      dateTime: this.props.history.location.state.state.dateTime,
    });
  }

  render() {
    return (
      <div className="confirmation-container">
        <div className="page-header-back page-back-link">
          <span>&#60;</span>
          <Link to="/">Home </Link>
        </div>
        <div className="booking-confirmed-customer">
          <div className="booking-confirmed-header">
            <h2>
              Booking <br />
              Confirmed
            </h2>
          </div>
          <div className="booking-confirmed-subheader">
            <h4>{this.props.history.location.state.state.customerName}</h4>
          </div>
          <div className="booking-customer-countnumber">
            <div className="booking-countnumber">
              <div>{moment(this.state.dateTime).format("DD")}</div>
              <div>{moment(this.state.dateTime).format("MMM")}</div>
              <div className="booking-countnumber-check">
                <img src={countnumbercheck} alt="countnumbercheck" />
              </div>
            </div>
          </div>
          <div className="booking-confirmed-schedule">
            <span>{moment(this.state.dateTime).format("LT")}</span>
          </div>
{/* 
          <div className="booking-confirmed-seelocation">
            <span>Click to see the location </span>
          </div> */}

          <div className="map-location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.122623375734!2d-79.4039092!3d43.66641949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34961658844b%3A0x592a3977f0024232!2s750%20Spadina%20Ave.%2C%20Toronto%2C%20ON%20M5S%202T1%2C%20Canada!5e0!3m2!1sen!2sbd!4v1659352675121!5m2!1sen!2sbd"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="location-address">
            <p>Duke Barber Shop </p>
            <p>+1 (416) 519-7046</p>
            <p>750 Spadina Ave, #3, Toronto, ON M5S 2T1</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirmation;
