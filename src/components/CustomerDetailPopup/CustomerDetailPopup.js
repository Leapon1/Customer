import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import CircularProgress from "@mui/material/CircularProgress";
import { useHistory } from "react-router-dom";
import close from "../../assets/icons/close.png";

const CustomerDetailPopup = (props) => {
  const [inputClick, setInputClick] = useState(false)
  const [inputError, setInputError] = useState({
    email: "",
    isWhatsapp: "",
    name: "",
    phone: "",
  })
  const history = useHistory();
  const [customerDetail, setCustomerDetail] = useState({
    name: "",
    email: "",
    contactNo: "",
    isChecked: true,
    customerInfo: "",
    isLoading: false,
    appointmentId: "",
    appointmentData: "",
  });

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    customerDetail[name] = value;
    setCustomerDetail({
        ...customerDetail,
    });
  };

  const clickHandler = () => {
    setCustomerDetail({ isLoading: true });
    const payLoad = {
      name: customerDetail.name,
      email: customerDetail.email,
      phone: customerDetail.contactNo,
      isWhatsapp: customerDetail.isChecked,
    };
    if (
      payLoad.name != "" &&
      payLoad.email != "" &&
      payLoad.phone != "" &&
      payLoad.isWhatsapp != ""
    ) {
      const URL = "/api/Customer/";
      axios.post(URL, payLoad).then((response) => {
        setCustomerDetail({ isLoading: false });
        if (response) {
          const payLoad2 = {
            customerId: response.data.CustId,
            StartTime: props?.DateTime,
            total: props?.TotalAmount,
            Status: 1
          };
          const AppointmentList =
            "/api/Appointment/";
          axios.post(AppointmentList, payLoad2).then((response) => {
            setCustomerDetail({
              isLoading: false,
            });

            props?.SelectedServices.map((item) => {
              const payLoad3 = {
                serviceId: item.ServiceId,
                qty: item.amount,
                appointmentId: response.data.ApptId,
                customerId: response.data.customerId,
              };
              const AppointmentServiceList =
                "/api/AppointmentService/";
              axios.post(AppointmentServiceList, payLoad3).then((response) => {
              });
            });

            if (response?.data) {
              props.CustomerInfo(false);
              history.push("/confirmation/", {
                state: {
                  dateTime: props.DateTime,
                  customerName: customerDetail.name,
                },
              });
              swal({
                title : "Success!",
                text: "Your details have Been submitted",
                icon: "success",
                timer: 1500,
                buttons: false
              });
            }
          });
        }
      })
      .catch((err) => {
        return (
          setInputError({
            email: err.response.data.email,
            isWhatsapp: err.response.data.isWhatsapp,
            name: err.response.data.name,
            phone: err.response.data.phone,
          }),
          console.log('err', err.response.data)
        )
      })
    } else {
      setCustomerDetail({ isLoading: false });
      props.CustomerInfo(false);
      swal({
        title : "Warning!",
        text: "Please fill out all the required fields",
        icon: "warning",
        timer: 1500,
        buttons: false
      });
    }
  };
  return (
    <div>
      {/* dialog customer detail popup */}

      <div className="popup-fullcontent">
        <div className="popup-inner">
        <div className={"popup-content "+(inputClick ? "popupTop" : "") }>
          <div className="popup-close-icon">
            <div onClick={() => {
                props.CustomerInfo(false)
               setInputClick(false)}}>
              <img src={close} style={{ width: "12px" }} alt="close icon" />
            </div>
          </div>
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
                  <input
                    name="name"
                    type="text"
                    onChange={changeHandler}
                    onClick={() => setInputClick(true)}
                    value={customerDetail.name}
                  />
                </div>
                <div className="popup-customerdetail-row">
                  <label>Email ID</label>
                  <input
                    name="email"
                    type="email"
                    onChange={changeHandler}
                    onClick={() => setInputClick(true)}
                    value={customerDetail.email}
                  />
                </div>
                <div className="popup-customerdetail-row">
                  <label>
                    Contact Number <span>*</span>
                  </label>
                  <input
                    name="contactNo"
                    type="tel"
                    onChange={changeHandler}
                    onClick={() => setInputClick(true)}
                    value={customerDetail.contactNo}
                  />
                </div>

                <div className="popup-customerdetail-checkbox">
                  <input
                    type="checkbox"
                    id="whatsapp"
                    name="isChecked"
                    onChange={changeHandler}
                    defaultChecked={customerDetail.isChecked}
                    value={customerDetail.isChecked}
                  />
                  <label htmlFor="whatsapp">Is this your whatsapp number?</label>
                </div>
                <div>
                  <span className="popupError">{inputError.name}</span>
                  <span className="popupError">{inputError.email}</span>
                  <span className="popupError">{inputError.phone}</span>
                  <span className="popupError">{inputError.isWhatsapp}</span>
                  </div>
                <div className="popup-customerdetail-row">
                  {customerDetail.isLoading ? (
                    <CircularProgress style={{ color: "#FF9900" }} />
                  ) : (
                    <button
                      onClick={ () => {
                        clickHandler();
                        setInputClick(false);
                      }}
                      className="popup-confirm-btn"
                    >
                      Confirm
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* --- end customer detail popup---- */}
    </div>
  );
};

export default CustomerDetailPopup;
