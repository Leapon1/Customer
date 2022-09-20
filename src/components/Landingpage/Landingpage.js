import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import axios from "axios";
import "./Landingpage.css";
import searchicon from "./images/searchicon.png";
import imageregular from "./images/imageregular.png";
import imagestudent from "./images/imagestudent.png";
import imagesenior from "./images/imagesenior.png";
import imagekids from "./images/imagekids.png";
import imagebuzzcut from "./images/imagebuzzcut.png";
import imageprem from "./images/imageprem.png";
import imagecolor from "./images/imagecolor.png";
import imagefacial from "./images/imagefacial.png";
import imageeyebrowwax from "./images/imageeyebrowwax.png";
import imagethreading from "./images/imagethreading.png";
import imageshave from "./images/imageshave.png";
import imagetrim from "./images/imagetrim.png";
import ServiceCard from "../ServiceCard/ServiceCard";
import MyHeader from "../Header/Header";

const globalArray = [];

class LandingPage extends Component {
  state = {
    products: [],
    toggleAdd: false,
    count: 0,
    addButtonIndex: "",
    cartCount: "",
    isSelected: [],
    total: 0,
    addedProductIndex: [],
    product: [],
    
  };
  componentDidMount() {
    const url = "https://leaponapi.herokuapp.com/api/Service/";
    axios.get(url).then((result) => {
      const products = result.data;
      this.setState({ products });
    });
  }

  calculateTotal = () => {
    let total = 0;
    this.state.addedProductIndex.map((productIndex, index) => {
      let product = this.state.products[productIndex];
      if (product) {
        total += product.amount * product.price;
      }
    });
    this.setState({
      total: total,
    });
  };


  render() {
    const testArray = [];

    const countValue = (countVal, index) => {
      const newArray = [...this.state.products];
      newArray[index].amount = countVal;
      this.setState({ newArray });
      testArray.push(index);
      this.setState({ isSelected: [...this.state.isSelected, testArray] });
    };

    return (
      <>
        <MyHeader count={this.state.cartCount} />
        <div className="landingpage-container">
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
            {this.state.products.map((product, index) => (
              <ServiceCard
                key={index}
                product={product}
                allProduct={this.state.products}
                index={index}
                count={this.state.count}
                setCount={(countVal) => {
                  countValue(countVal, index);
                  setTimeout(() => {
                    this.calculateTotal();
                  }, 200);
                }}
                setCartCount={(cartVal) =>
                  this.setState({ cartCount: cartVal })
                }
                addBtnClick={(index, product) => {
                  this.setState({
                    addedProductIndex: index,
                    product: product
                  });
                  setTimeout(() => {
                    this.calculateTotal();
                  }, 200);
                }}
              />
            ))}
          </div>
          {this.state.total === 0 ? (
            <div></div>
          ) : (
            <div className="select-date-con">
              <div className="wrapper">
              <h1 className="select-date-price">${this.state.total}</h1>
              <button
                className="select-date-btn"
                onClick={() =>{
                  
                  this.props.history.push("/summaryslotselection", {
                    state: {
                      cartVal: this.state.product.length,
                      product: this.state.product
                    },
                  })
                }}
                
              >
                Select date & time
              </button>
              </div>
            </div>
          )}

          {/*end:service*/}
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
      </>
    );
  }
}

export default LandingPage;
