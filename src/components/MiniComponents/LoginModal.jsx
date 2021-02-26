import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import close from "../../images/close.png";
import { toast } from "react-toastify";
import closeW from "../../images/closeW.png";
import { LoginModalWrapper } from "../../styles/components/LoginModalStyle";

export const LoginModal = (props) => {
  const isDark = useSelector((state) => state.dark.mode);
  const history = useHistory();
  const [email, handleEmail] = useState("");
  const [password, handlePassword] = useState("");
  const [emailError, handleEmailError] = useState(true);
  const [passwordError, handlePasswordError] = useState(true);

  const setEmail = (e) => {
    var mailFormat = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    handleEmail(e.target.value);
    if (mailFormat.test(e.target.value)) {
      handleEmailError(true);
    }
  };

  const checkEmailError = (e) => {
    var mailFormat = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    if (mailFormat.test(e.target.value)) {
      handleEmailError(true);
    } else {
      handleEmailError(false);
    }
  };

  const setPassword = (e) => {
    handlePassword(e.target.value);
    if (e.target.value.length > 3) {
      handlePasswordError(true);
    }
  };

  const checkPasswordError = (e) => {
    if (e.target.value.length < 3) {
      handlePasswordError(false);
    } else {
      handlePasswordError(true);
    }
  };

  const loginUser = () => {
    const payload = {
      email: email,
      password: password,
    };

    fetch(`http://localhost:8080/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          toast.success(res.message);
          handleEmail("");
          handlePassword("");
          props.toggleLogin();
          history.push("/dashboard");
        } else {
          toast.error(res.message);
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <LoginModalWrapper isDark={isDark}>
      <div className="container">
        <div className="container__header">
          <div className="container__header--name">Login</div>
          <img
            className="container__header--img"
            onClick={props.toggleLogin}
            src={isDark ? closeW : close}
          />
        </div>
        <div className="container__body">
          <input
            className="container__body--input"
            value={email}
            onChange={setEmail}
            onBlur={checkEmailError}
            placeholder="eg. example.company.com"
          />
          {!emailError ? (
            <span className="container__body--formError">
              *Email address not valid
            </span>
          ) : (
            ""
          )}
          <input
            className="container__body--input"
            value={password}
            onChange={setPassword}
            onBlur={checkPasswordError}
            placeholder="eg. asdas@435sdQS"
          />
          {!passwordError ? (
            <span className="container__body--formError">
              *Password not valid
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="container__footer">
          <button
            disabled={
              email !== "" &&
              password !== "" &&
              emailError === true &&
              passwordError === true
                ? false
                : true
            }
            className="container__footer--button"
            onClick={() => loginUser()}
          >
            Submit
          </button>
        </div>
      </div>
    </LoginModalWrapper>
  );
};
