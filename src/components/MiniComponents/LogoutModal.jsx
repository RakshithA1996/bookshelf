import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { LogModalWrap } from "../../styles/components/LogModalStyle";

export default function LogoutModal(props) {
  const isDark = useSelector((state) => state.dark.mode);
  const history = useHistory();
  return (
    <LogModalWrap isDark={isDark}>
      <div className="container">
        <div className="container__para">Do you want to logout?</div>
        <div className="container__btnDiv">
          <button
            className="container__btnDiv--btn1"
            onClick={() => history.push("/")}
          >
            Yes
          </button>
          <button
            className="container__btnDiv--btn2"
            onClick={props.toggleLogoutModal}
          >
            No
          </button>
        </div>
      </div>
    </LogModalWrap>
  );
}
