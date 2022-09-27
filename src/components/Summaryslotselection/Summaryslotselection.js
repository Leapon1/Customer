import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./Summaryslotselection.css";
import MyHeader from "../Header/Header";
import DateTimePicker from "../DayTimePicker/DayTimePicker";
import * as moment from "moment";
import CustomerDetailPopup from "../CustomerDetailPopup/CustomerDetailPopup";
import axios from "axios";

let isBooked = false
let globalArray = [];
let totalAmount11 = 0;
class Summaryslotselection extends Component {
  state = {
    services: [],
    totalAmount: 0,
    dateTime: "",
    dateTimeFormat: "",
    toggle: false,
    appointmentData: "",
    customerId: "",
  };

  componentDidMount() {
    globalArray = [...this.props.location.state.state.product];
    globalArray.map((item) => (this.state.totalAmount += item.amount * item.price));
    this.setState({ services: this.props.location.state.state.product });
  }

  bookedTime() {
    const AppointmentListURL ="/api/Appointment/";
    axios.get(AppointmentListURL).then((response) => {
      let resTime = response.data.filter((item) => {
            const compareDate = moment(item.StartTime).format();
            return compareDate === this.state.dateTimeFormat
          })
        resTime.length === 0 ? isBooked = false : isBooked = true
        console.log('isBooked', isBooked)
    })
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
            <Link className="backbtn" to="/"><span>&#60;</span></Link>
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
                            className="decrement-count decrement-count_1"
                            onClick={() => handleCount("dec", item, index)}
                          >
                            <span className="increbtn">-</span>
                          </div>
                          

                          <div className="total-count total-count-1">
                            {item.amount}
                          </div>
                          <div
                            className="increment-count increment-count_1"
                            onClick={() => handleCount("inc", item, index)}
                          >
                            <span className="increbtn">+</span>
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
              dateTime={(value) => (
                this.setState({ dateTime: value , dateTimeFormat: moment(value).format()}),
                this.bookedTime()
              ) }
              
            />
          </div>
          {
            this.state.dateTime ? 
            <div className={"bottom-fixed-container "+(this.state.toggle ? "bkhide" : "")}>
              
            <div className="calender-con">
              <div className="company-calendar-resultoutput">
                {moment(this.state.dateTime).format("MMMM DD") != "Invalid date"
                  ? moment(this.state.dateTime).format("MMMM DD")
                  : "Date"}{" "}
                |{" "}
                {moment(this.state.dateTime).format("LT") != "Invalid date"
                  ? moment(this.state.dateTime).format("LT")
                  : "Time"}
              </div>
            </div>
            { 
                isBooked === false ? <div className="bookappointment-con">
                <div className="bookappointment-link">
                    <div
                      className="bookappointment-btn "
                      onClick={() => this.setState({ toggle: true })}
                    >
                      Book Appointment
                    </div>
                </div>
              </div> : <p>Already booked at this time</p>
              
            }
            
          </div> : <div></div>
          }
          
        </div>
      </>
    );
  }
}

export default Summaryslotselection;
