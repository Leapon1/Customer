import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const globalArray = [];
const globalIndex = [];

const ServiceCard = (props) => {
  const history = useHistory();
  const [selectedItem, setSelectedItem] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState([]);

  const handleCount = (val, i) => {
    if (val === "inc") {
      i && props.setCount(props.product.amount + 1);
    } else {
      if (props.product.amount > 0) {
        i && props.setCount(props.product.amount - 1);
      }
    }
  };


  const isExist = (i) => {
    return selectedIndex.includes(i);
  };

  const addButtonClick = (index, product) => {
    globalArray.push(product);
    globalIndex.push(index);
    setSelectedIndex(globalIndex);
    setSelectedItem(globalArray);
    props.setCartCount(globalArray.length);
    props.addBtnClick(globalIndex ,globalArray)
    isExist(index);
  };

  let prodData = [props.product]

  return (
    <div>
      <div className="company-service-item" key={props.product.ServiceId}>
        <div className="company-service-item-leftpart">
          <div className="company-service-item-top">
            <span className="company-service-item-name">
              {props.product.name}
            </span>
            <span className="company-service-item-divider">|</span>
            <span className="company-service-item-amount">
              ${props.product.price}{" "}
            </span>
          </div>
          <div className="company-service-item-bottom">
            {isExist(props.index) ? (
              <div className="incrementdecrement-box">
                 <div
                  className="decrement-count decrement-count_1"
                  onClick={() => {
                    handleCount("dec", isExist(props.index));
                  }}
                >
                  <span className="increbtn">-</span>
                </div>

                <div className="total-count total-count-1">
                  {props.product.amount}
                </div>

                <div
                  className="increment-count increment-count_1"
                  onClick={() => {
                    handleCount("inc", isExist(props.index));
                  }}
                >
                  <span className="increbtn">+</span>
                </div>
              </div>
            ) : (
              <button
                onClick={() => addButtonClick(props.index, props.product)}
              >
                Add
              </button>
            )}
            {/* </Link> */}

            <button
              onClick={() =>
                history.push("/summaryslotselection/", {
                  state: {
                    cartVal: selectedItem.length == 0 ? 1 : selectedItem.length,
                    product: selectedItem.length == 0 ? prodData : selectedItem,
                  },
                })
              } 
            >
              Book Now
            </button>
          </div>
        </div>
        <div className="company-service-item-rightpart">
          <span className="company-service-picture">
            <img src={props.product.img} alt={props.product.name} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
