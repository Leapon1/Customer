import React, { Component } from "react";
import {Link } from "react-router-dom";

import "./Landingpageselection.css";

import searchicon from "./images/searchicon.png";

import imageregular from "./images/imageregular.png";
import imagestudent from "./images/imagestudent.png";
import imagesenior from "./images/imagesenior.png";

class LandingpageSelection extends Component {
  render() {
    /*start:increment decrement*/
    const incrementCount =
      document.getElementsByClassName("increment-count")[0];
    const decrementCount =
      document.getElementsByClassName("decrement-count")[0];
    var count = 0;

    const handleIncrement = (e) => {
      count++;
      document.getElementsByClassName("total-count")[0].innerHTML = count;
    };
    const handleDecrement = (e) => {
      if (count > 0) {
        count--;
      }
      document.getElementsByClassName("total-count")[0].innerHTML = count;
    };
    /*end:increment decrement*/

    /*start:increment decrement*/
    const incrementCount_1 =
      document.getElementsByClassName("increment-count_1")[0];
    const decrementCount_1 =
      document.getElementsByClassName("decrement-count_1")[0];
    var count_1 = 0;

    const handleIncrement_1 = (e) => {
      count_1++;
      document.getElementsByClassName("total-count-1")[0].innerHTML = count_1;
    };
    const handleDecrement_1 = (e) => {
      count_1--;
      document.getElementsByClassName("total-count-1")[0].innerHTML = count_1;
    };
    /*end:increment decrement*/

    return (
      <div
        className="landingpageselection-container"
        style={{ border: "2px solid #00f" }}
      >
        <div className="seach-box">
          <div className="seach-form-content">
            <form>
              <span className="searchicon">
                <img src={searchicon} alt="searchicon" />
              </span>
              <input
                type="text"
                name="search"
                placeholder="Search for a service"
              />
            </form>
          </div>

          <div className="seach-filter">
            <button>Hair</button>
            <button>Beard</button>
            <button>Face</button>
          </div>
        </div>

        <div className="company-offer">
          <div className="company-offer-leftpart">Offer</div>
          <div className="company-offer-rightpart">
            Save upto 25% off on a haircut. Avail offer at the salon.
          </div>
        </div>

        <div className="company-service-name">
          <h4>Haircut</h4>
        </div>

        <div className="company-service">
          {/*start:service item*/}
          <div className="company-service-item">
            <div className="company-service-item-leftpart">
              <div className="company-service-item-top">
                <span className="company-service-item-name">Regular</span>
                <span className="company-service-item-divider">|</span>
                <span className="company-service-item-amount">$39.15 </span>
              </div>
              <div className="company-service-item-bottom">
                {/*start:increment decrement*/}
                <div class="incrementdecrement-box">
                  <div className="increment-count" onClick={handleIncrement}>
                    <input type="text" value="+" />
                  </div>

                  <div className="total-count">1</div>

                  <div className="decrement-count" onClick={handleDecrement}>
                    <input type="text" value="-" />
                  </div>
                </div>
                {/*end:increment decrement*/}

                <Link to="/summaryslotselection">
                  <button>Book Now</button>
                </Link>
              </div>
            </div>
            <div className="company-service-item-rightpart">
              <span className="company-service-picture">
                <img src={imageregular} alt="imageregular" />
              </span>
            </div>
          </div>
          {/*end:service item*/}

          {/*start:service item*/}
          <div className="company-service-item">
            <div className="company-service-item-leftpart">
              <div className="company-service-item-top">
                <span className="company-service-item-name">Students</span>
                <span className="company-service-item-divider">|</span>
                <span className="company-service-item-amount">$34</span>
              </div>
              <div className="company-service-item-bottom">
                <Link to="/summaryslotselection">
                  <button>Add</button>
                </Link>
                <Link to="/summaryslotselection">
                  <button>Book Now</button>
                </Link>
              </div>
            </div>
            <div className="company-service-item-rightpart">
              <span className="company-service-picture">
                <img src={imagestudent} alt="imagestudent" />
              </span>
            </div>
          </div>
          {/*end:service item*/}

          {/*start:service item*/}
          <div className="company-service-item">
            <div className="company-service-item-leftpart">
              <div className="company-service-item-top">
                <span className="company-service-item-name">Seniors</span>
                <span className="company-service-item-divider">|</span>
                <span className="company-service-item-amount">$31 </span>
              </div>
              <div className="company-service-item-bottom">
                {/*start:increment decrement*/}
                <div
                  class="incrementdecrement-box"
                  style={{ border: "2px solid #f0f" }}
                >
                  <div
                    className="increment-count increment-count_1"
                    onClick={handleIncrement_1}
                  >
                    <input type="text" value="+" />
                  </div>

                  <div className="total-count total-count-1">1</div>

                  <div
                    className="decrement-count decrement-count_1"
                    onClick={handleDecrement_1}
                  >
                    <input type="text" value="-" />
                  </div>
                </div>
                {/*end:increment decrement*/}

                <Link to="/summaryslotselection">
                  <button>Book Now</button>
                </Link>
              </div>
            </div>
            <div className="company-service-item-rightpart">
              <span className="company-service-picture">
                <img src={imagesenior} alt="imagesenior" />
              </span>
            </div>
          </div>
          {/*end:service item*/}
        </div>
        {/*end:service*/}
      
        <div className="select-datetime">
          <div className="select-datetime-leftpart">
            <span>$73.15</span>
          </div>
          <div className="select-datetime-righpart">
            <button className="select-datetime-btn">Select date & time</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingpageSelection;
