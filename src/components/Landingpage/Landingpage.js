import React, { Component } from "react";
import axios from "axios";
import "./Landingpage.css";
import ServiceCard from "../ServiceCard/ServiceCard";
import MyHeader from "../Header/Header";

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
    const url = "/api/Service/";
    axios.get(url).then((result) => {
      const products = result.data;
      this.setState({ products });
    });
  }

  getDatabyCategory(categoryId = false) {
    let catId = categoryId ? categoryId : this.state.categoryId;
    const url = "/api/Service/";
    axios.get(url).then((res) => {
      let cats = res.data.filter((item) => {
        return item.category === catId
      })
      this.setState({ products : "" });
      this.setState({ products : cats });
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
        <MyHeader count={this.state.cartCount} product={this.state.product}/>
        <div className="landingpage-container">
          <div className="seach-box">
            <div className="seach-filter">
              <button onClick={() => {
                this.setState({ categoryId: 1})
                this.getDatabyCategory(1)
              } }>Hair</button>
              <button onClick={() => {
                this.setState({ categoryId: 3})
                this.getDatabyCategory(2)
              } }>Beard</button>
              <button onClick={() => {
                this.setState({ categoryId: 3})
                this.getDatabyCategory(3)
              } }>Face</button>
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
