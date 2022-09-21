import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import "./Responsive.css";

// import Header from "./components/Header/Header.js";
import Landingpage from "./components/Landingpage/Landingpage.js";
// import Landingpageselection from "./components/Landingpageselection/Landingpageselection.js";
import Summaryslotselection from "./components/Summaryslotselection/Summaryslotselection.js";
import Customerdetail from "./components/Customerdetail/Customerdetail.js";
import Confirmation from "./components/Confirmation/Confirmation.js";

class App extends Component {
  state = {
    cartCount: "",
  };
  render() {
    return (
      <div className="App">
        <Router>
          {/* <Header count={5} /> */}
          <div className="body-container">
            <Route path="/" exact component={Landingpage} />
            <Route path="/customerLandingpage" exact component={Landingpage} />
            {/* <Route
              path="/landingpageselection/"
              component={Landingpageselection}
            /> */}
            <Route
              path="/summaryslotselection/"
              component={Summaryslotselection}
            />
            <Route path="/customerdetail/" component={Customerdetail} />
            <Route path="/confirmation/" component={Confirmation} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
