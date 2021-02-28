import styled from "styled-components";

const media = {
  mobile: "@media(max-width:600px)",
};

const lightTheme = {
  bannerBg: "#ffffff",
};

const darkTheme = {
  bannerBg: "#363636",
};

export const DashboardWrap = styled.div`
  display: flex;
  flex-direction: row;

  .navbar {
    background: ${(props) =>
      props.isDark ? darkTheme.bannerBg : lightTheme.bannerBg};
  }

  .dashboard {
    width: 100%;
  }
`;
