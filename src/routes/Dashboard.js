import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import DashContent from "../components/Dashboard/DashContent";
import Navbar from "../components/Dashboard/Navbar";
import {Footer} from "../components/Home/Footer";
import { DashboardWrap } from "../styles/routes/DashboardStyle";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      isNavbar: false,
    };
  }

  toggleNavbar = () => {
    this.setState({ isNavbar: !this.state.isNavbar });
  };

  render() {
    const { isNavbar } = this.state;
    return (
      <div>
        <DashboardWrap isDark={this.props.isDark}>
          <div className="navbar">
            <Navbar toggleNavbar={this.toggleNavbar} isNavbar={isNavbar} />
          </div>
          <div className="dashboard">
            <DashContent />
          </div>
        </DashboardWrap>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isDark: state.dark.mode,
});

export default connect(mapStateToProps)(Dashboard);
