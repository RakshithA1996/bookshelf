import styled from "styled-components";

const media = {
  mobile: "@media(max-width:600px)",
};

const lightTheme = {
  bannerBg: "#f0912b",
  para1: "#383838",
  para2: "#f0912b",
  contentHead: "#000000",
  border: "#e5e5e5",
};

const darkTheme = {
  bannerBg: "#000000",
  para1: "#757575",
  para2: "#0bbdab",
  contentHead: "#0bbdab",
  border: "#363636",
};

export const DashContentWrap = styled.div`
  background: ${(props) =>
    props.isDark ? darkTheme.bannerBg : lightTheme.bannerBg};

  .contentHeader,
  .contentHeader1 {
    padding-left: 2rem;
    margin-top: 10rem;
    font-size: 3rem;
    font-weight: 700;
    line-height: 120%;
    color: ${(props) =>
      props.isDark ? darkTheme.contentHead : lightTheme.contentHead};
  }

  .contentHeader1 {
    padding-top: 5rem;
    margin-top: 0;
    border-top: 1px solid
      ${(props) => (props.isDark ? darkTheme.border : lightTheme.border)};
  }

  .contentPopular {
    padding: 0 2rem;
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 4rem;
    padding-bottom: 5rem;
  }

  .dashboardMain {
    padding-left: 4rem;
    padding-bottom: 4rem;
  }
`;
