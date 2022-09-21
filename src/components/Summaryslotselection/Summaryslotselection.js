import React, { Component } from "react";
import "./Summaryslotselection.css";
// import searchicon from "./images/searchicon.png";
// import calendarsample from "./images/calendarsample.png";
import MyHeader from "../Header/Header";
// import PickDate from "../PickDate/PickDate";
import DateTimePicker from "../DayTimePicker/DayTimePicker";
import * as moment from "moment";
import CustomerDetailPopup from "../CustomerDetailPopup/CustomerDetailPopup";

let globalArray = [];
let totalAmount11 = 0;
class Summaryslotselection extends Component {
  state = {
    services: [],
    totalAmount: 0,
    dateTime: "",
    toggle: false,
    appointmentData: "",
    customerId: "",
  };

  componentDidMount() {
    globalArray = [...this.props.location.state.state.product];
    globalArray.map((item) => (this.state.totalAmount += item.amount * item.price));
    this.setState({ services: this.props.location.state.state.product });
  }

  render() {
    const location = this.props.location.state.state.cartVal;
    const handleCount = (val, item, index) => {
      if (val === "inc") {
        item.amount = item.amount + 1;
      } else if (val === "dec") {
        const newArray = [...this.state.services];
        if (item.amount > 0) {
          newArray[index].amount = item.amount - 1;
        }
      }
      excessItem(item, val);
    };

    const excessItem = (item, val) => {
      if (val === "inc") {
        this.state.totalAmount += item.price;
      } else {
        this.state.totalAmount -= item.price;
      }
      totalAmount11 = this.state.totalAmount;
      this.setState({ totalAmount: totalAmount11 });
    };

    return (
      <>
        {/* Customer detail Popup Start */}

        {this.state.toggle && (
          <CustomerDetailPopup
            CustomerInfo={(toggleVal) => this.setState({ toggle: toggleVal })}
            SelectedServices={this.props.location.state.state.product}
            DateTime={this.state.dateTime}
            TotalAmount={this.state.totalAmount}
          />
        )}
        

        {/* Customer detail Popup End */}

        <MyHeader count={location} />
        <div className="summaryslotselection-container">
          <div className="page-header-back">
            <span>&#60;</span>
            Summary
          </div>

          <div className="company-summary">
            {/*start:summary-item*/}
            {this.state.services.map((item, index) => {
              return (
                <>
                  <div className="company-summary-item">
                    <div className="company-summary-item-leftpart">
                      <div className="company-summaryitem-top">{item.name}</div>
                      <div className="company-summaryitem-bottom">
                        ${item.price}
                      </div>
                    </div>
                    <div className="company-summary-item-rightpart">
                      {/*start:increment decrement*/}
                      <div className="incrementdecrement-box">
                        <div
                          className="increment-count increment-count_1"
                          onClick={() => handleCount("inc", item, index)}
                        >
                          <span className="increbtn">+</span>
                        </div>

                        <div className="total-count total-count-1">
                          {item.amount}
                        </div>

                        <div
                          className="decrement-count decrement-count_1"
                          onClick={() => handleCount("dec", item, index)}
                        >
                          <span className="increbtn">-</span>
                        </div>
                      </div>
                      {/*end:increment decrement*/}

                      <div className="company-summaryitem-rightbottom">
                        ${item.price * item.amount}
                        {/* {productCountPrice(item, index)} */}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            {/*end:summary-item*/}

            {/*start:Grand Total*/}
            <div className="company-summary-grandtotal">
              <div className="company-summary-grandtotal-leftpart">
                <span>Grand Total</span>
              </div>
              <div className="company-summary-grandtotal-rightpart">
                <div className="company-summary-grandtotal-top">
                  ${this.state.totalAmount}
                </div>
                <div className="company-summary-grandtotal-bottom">+ Taxes</div>
              </div>
            </div>
            {/*end:Grand Total*/}
          </div>

          <div className="company-date-heading">
            <h4>Date</h4>
          </div>
          <div className="company-calendar-section">
            <DateTimePicker
              dateTime={(value) => this.setState({ dateTime: value })}
            />
          </div>
          <div className="company-calendar-resultoutput">
            {moment(this.state.dateTime).format("MMMM DD") !== "Invalid date"
              ? moment(this.state.dateTime).format("MMMM DD")
              : "Date"}{" "}
            |{" "}
            {moment(this.state.dateTime).format("LT") !== "Invalid date"
              ? moment(this.state.dateTime).format("LT")
              : "Time"}
          </div>
          <div className="bookappointment-link">
            <div
              className="bookappointment-btn"
              onClick={() => this.setState({ toggle: true })}
            >
              Book Appointment
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Summaryslotselection;
