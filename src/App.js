import React, { Component } from "react";
import ScrollToTop from "./ScrollToTop";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import Home from "./routes/Home";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./routes/Dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={() => <Home />} />
              <Route exact path="/dashboard" component={() => <Dashboard />} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
        <ToastContainer
          style={{ fontSize: "1.5rem", marginLeft: "1.2rem" }}
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

export default App;
