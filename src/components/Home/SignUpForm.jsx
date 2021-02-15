import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SignUpWrapper } from "../../styles/components/SignUpStyle";

export const SignUpForm = () => {
  const isDark = useSelector((state) => state.dark.mode);
  const [name, handleName] = useState("");
  const [mobile, handleMobile] = useState("");
  const [email, handleEmail] = useState("");
  const [nameError, handleNameError] = useState(true);
  const [mobileError, handleMobileError] = useState(true);
  const [emailError, handleEmailError] = useState(true);
  const [buttonEnabled, handleButtonEnable] = useState(false);

  const setName = (e) => {
    handleName(e.target.value);
    if (e.target.value.length > 3) {
      handleNameError(true);
    }
  };

  const checkNameError = (e) => {
    if (e.target.value.length < 3) {
      handleNameError(false);
    } else {
      handleNameError(true);
    }
  };

  const setMobile = (e) => {
    var mobileFromat = new RegExp("^[7-9][0-9]{9}$");
    if (e.target.value.length <= 10) {
      handleMobile(e.target.value);
      if (mobileFromat.test(e.target.value)) {
        handleMobileError(true);
      }
    }
  };

  const checkMobileError = (e) => {
    var mobileFromat = new RegExp("^[6-9][0-9]{9}$");
    if (e.target.value.length < 10) {
      handleMobileError(false);
      if (mobileFromat.test(e.target.value)) {
        handleMobileError(true);
      } else {
        handleMobileError(false);
      }
    } else {
      handleMobileError(true);
      if (mobileFromat.test(e.target.value)) {
        handleMobileError(true);
      } else {
        handleMobileError(false);
      }
    }
  };

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

  return (
    <SignUpWrapper isDark={isDark}>
      <div className="formHeader">Register to buy books</div>
      <input
        className="formInput"
        value={name}
        onChange={setName}
        onBlur={checkNameError}
        placeholder="eg. Rakshith Acharya"
      />
      {!nameError ? <span className="formError">*Name not valid</span> : ""}
      <input
        className="formInput"
        value={mobile}
        onChange={setMobile}
        onBlur={checkMobileError}
        placeholder="eg. 9999999999"
        type="number"
      />
      {!mobileError ? (
        <span className="formError">*Mobile number not valid</span>
      ) : (
        ""
      )}
      <input
        className="formInput"
        value={email}
        onChange={setEmail}
        onBlur={checkEmailError}
        placeholder="eg. example.company.com"
      />
      {!emailError ? (
        <span className="formError">*Email address not valid</span>
      ) : (
        ""
      )}
      <button
        disabled={
          name !== "" &&
          mobile !== "" &&
          email !== "" &&
          nameError === true &&
          mobileError === true &&
          emailError === true
            ? false
            : true
        }
        className="formButton"
        onClick={() => console.log("dstrfsdfsdf")}
      >
        Submit
      </button>
    </SignUpWrapper>
  );
};
