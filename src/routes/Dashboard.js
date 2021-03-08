import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import DashContent from "../components/Dashboard/DashContent";
import Navbar from "../components/Dashboard/Navbar";
import { Footer } from "../components/Home/Footer";
import LogoutModal from "../components/MiniComponents/LogoutModal";
import { DashboardWrap } from "../styles/routes/DashboardStyle";
import meluha from "../images/book cover/meluha.jpg";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      isNavbar: false,
      isLogoutModal: false,
      popularBooksArr: [],
      newCollectionBooksArr: [],
    };
  }

  componentDidMount() {
    this.getPopularBooks();
    this.getNewBooks();
  }

  toggleNavbar = () => {
    this.setState({ isNavbar: !this.state.isNavbar });
  };

  toggleLogoutModal = () => {
    this.setState({ isLogoutModal: !this.state.isLogoutModal });
  };

  getPopularBooks = () => {
    fetch(`http://localhost:8080/users/allPopBooks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          this.setState({ popularBooksArr: res.data });
        } else {
          toast.error("Api failed");
        }
      })
      .catch((err) => toast.error(err.message));
  };

  getNewBooks = () => {
    fetch(`http://localhost:8080/users/allNewCollection`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          this.setState({ newCollectionBooksArr: res.data });
        } else {
          toast.error("Api failed");
        }
      })
      .catch((err) => toast.error(err.message));
  };

  render() {
    const {
      isNavbar,
      isLogoutModal,
      popularBooksArr,
      newCollectionBooksArr,
    } = this.state;
    return (
      <div>
        <DashboardWrap isDark={this.props.isDark}>
          <div className="navbar">
            <Navbar toggleNavbar={this.toggleNavbar} isNavbar={isNavbar} />
          </div>
          <div className="dashboard">
            <DashContent
              popularBooksArr={popularBooksArr}
              newCollectionBooksArr={newCollectionBooksArr}
              toggleLogoutModal={this.toggleLogoutModal}
            />
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
