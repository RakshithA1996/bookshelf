import React from "react";
import { useDispatch, useSelector } from "react-redux";
import setDark from "../../redux/actions/setDark";
import { DashHeadWrap } from "../../styles/components/Dashboard/DashHeadStyle";
import SearchBar from "../MiniComponents/SearchBar";

export default function DashHeader() {
  const isDark = useSelector((state) => state.dark.mode);
  const dispatch = useDispatch();

  const toggleDarkMode = (mode) => {
    if (mode) {
      dispatch(setDark("IS_LIGHT"));
    } else {
      dispatch(setDark("IS_DARK"));
    }
  };

  return (
    <DashHeadWrap isDark={isDark}>
      <div className="logo1">BOOK<span className="logo2">stron</span></div>
      <SearchBar isDark={isDark} />
      <div className="logoutDiv">
        <div className="darkMode">
          <div className="darkMode__para">{isDark ? "Light" : "Dark"}</div>
          <label className="switch" htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              onChange={() => toggleDarkMode(isDark)}
              checked={isDark}
            />
            <div className="slider round"></div>
          </label>
        </div>
        <button className="logoutDiv__Btn">Logout</button>
      </div>
    </DashHeadWrap>
  );
}
