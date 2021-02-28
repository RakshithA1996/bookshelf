import styled from "styled-components";

const media = {
  mobile: "@media(max-width:600px)",
};

const lightTheme = {
  navBg: "#ffffff",
  navColor: "#000000",
  navColor2: "#000000",
};

const darkTheme = {
  navBg: "#363636",
  navColor: "#0bbdab",
  navColor2: "#ffffff",
};

export const NavbarWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.isDark ? darkTheme.navBg : lightTheme.navBg)};

  .iconReact,
  .iconReactNav {
    padding: 2rem;
    font-size: 1.8rem;
    color: ${(props) =>
      props.isDark ? darkTheme.navColor2 : lightTheme.navColor2};
    transition: 0.5s;

    &:hover {
      cursor: pointer;
      color: #0073ff;
    }
  }
`;

export const Navbar2Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: ${(props) => (props.isDark ? darkTheme.navBg : lightTheme.navBg)};
  color: ${(props) =>
    props.isDark ? darkTheme.navColor : lightTheme.navColor};

  .iconReact,
  .iconReactDiv,
  .iconReactNav {
    padding: 2rem;
    font-size: 1.8rem;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${(props) =>
      props.isDark ? darkTheme.navColor2 : lightTheme.navColor2};
    transition: 0.5s;

    &:hover {
      cursor: pointer;
      color: #0073ff;
    }
  }

  .iconReactNav {
    &:hover {
      color: #d40404;
    }
  }

  .navHome,
  .navTrend,
  .navLib,
  .navSetting {
    margin: 0 5rem 0 2rem;
    font-size: 1.3rem;
  }
`;
