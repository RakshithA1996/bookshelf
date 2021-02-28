import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import DashContent from "../components/Dashboard/DashContent";
import Navbar from "../components/Dashboard/Navbar";
import { Footer } from "../components/Home/Footer";
import LogoutModal from "../components/MiniComponents/LogoutModal";
import { DashboardWrap } from "../styles/routes/DashboardStyle";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      isNavbar: false,
      isLogoutModal: false,
    };
  }

  toggleNavbar = () => {
    this.setState({ isNavbar: !this.state.isNavbar });
  };

  toggleLogoutModal = () => {
    this.setState({ isLogoutModal: !this.state.isLogoutModal });
  };

  render() {
    const { isNavbar, isLogoutModal } = this.state;
    return (
      <div>
        <DashboardWrap isDark={this.props.isDark}>
          <div className="navbar">
            <Navbar toggleNavbar={this.toggleNavbar} isNavbar={isNavbar} />
          </div>
          <div className="dashboard">
            <DashContent toggleLogoutModal={this.toggleLogoutModal} />
          </div>
        </DashboardWrap>
        <Footer />
        {isLogoutModal ? (
          <LogoutModal toggleLogoutModal={this.toggleLogoutModal} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isDark: state.dark.mode,
});

export default connect(mapStateToProps)(Dashboard);
