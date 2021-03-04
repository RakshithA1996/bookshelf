import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import {toast} from "react-toastify";
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
      popularBooksArr: [
        {
          name: "The Immortals of Meluha",
          author: "Amish Tripathi",
          publisher: "Westland Press",
        },
        {
          name: "The Immortals of Meluha",
          author: "Amish Tripathi",
          publisher: "Westland Press",
        },
        {
          name: "The Immortals of Meluha",
          author: "Amish Tripathi",
          publisher: "Westland Press",
        },
        {
          name: "The Immortals of Meluha",
          author: "Amish Tripathi",
          publisher: "Westland Press",
        },
        {
          name: "The Immortals of Meluha",
          author: "Amish Tripathi",
          publisher: "Westland Press",
        },
      ],
      newCollectionBooksArr: [
        {
          name: "The Immortals of Meluha",
          author: "Amish Tripathi",
          publisher: "Westland Press",
        },
        {
          name: "The Immortals of Meluha",
          author: "Amish Tripathi",
          publisher: "Westland Press",
        },
        {
          name: "The Immortals of Meluha",
          author: "Amish Tripathi",
          publisher: "Westland Press",
        },
        {
          name: "The Immortals of Meluha",
          author: "Amish Tripathi",
          publisher: "Westland Press",
        },
        {
          name: "The Immortals of Meluha",
          author: "Amish Tripathi",
          publisher: "Westland Press",
        },
      ],
    };
  }

  componentDidMount(){
    this.getPopularBooks()
  }

  toggleNavbar = () => {
    this.setState({ isNavbar: !this.state.isNavbar });
  };

  toggleLogoutModal = () => {
    this.setState({ isLogoutModal: !this.state.isLogoutModal });
  };

  getPopularBooks = () => {
    fetch(`http://localhost:8080/users/allBooks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
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
