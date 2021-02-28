import React from "react";
import { useSelector } from "react-redux";
import {
  Navbar2Wrap,
  NavbarWrap,
} from "../../styles/components/Dashboard/NavbarStyle";
import {
  AiOutlineMenu,
  AiFillHome,
  AiTwotoneFire,
  AiTwotoneSetting,
} from "react-icons/ai";
import {CgCloseR} from "react-icons/cg";
import { MdLibraryBooks } from "react-icons/md";

export default function Navbar(props) {
  const isDark = useSelector((state) => state.dark.mode);

  return !props.isNavbar ? (
    <NavbarWrap isDark={isDark}>
      <div className="iconReactNav" onClick={props.toggleNavbar}>
        <AiOutlineMenu />
      </div>
      <div className="iconReact">
        <AiFillHome />
      </div>
      <div className="iconReact">
        <AiTwotoneFire />
      </div>
      <div className="iconReact">
        <MdLibraryBooks />
      </div>
      <div className="iconReact">
        <AiTwotoneSetting />
      </div>
    </NavbarWrap>
  ) : (
    <Navbar2Wrap isDark={isDark}>
      <div className="iconReactNav" onClick={props.toggleNavbar}>
        <CgCloseR />
      </div>
      <div className="iconReactDiv">
        <AiFillHome />
        <div className="navHome">Home</div>
      </div>
      <div className="iconReact">
        <AiTwotoneFire />
        <div className="navTrend">Trend</div>
      </div>
      <div className="iconReact">
        <MdLibraryBooks />
        <div className="navLib">Library</div>
      </div>
      <div className="iconReact">
        <AiTwotoneSetting />
        <div className="navSetting">Settings</div>
      </div>
    </Navbar2Wrap>
  );
}
