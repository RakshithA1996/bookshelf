import styled from "styled-components";

const media = {
  mobile: "@media(max-width:600px)",
};

const lightTheme = {
  toggleColorBefore: "#383838",
  toggleColorAfter: "#757575",
  toggleLabelColor: "#000000",
  buttonBg: "#ffffff",
  buttonColor: "#b50000",
  logo1: "#ffffff",
  logo2: "#383838",
};

const darkTheme = {
  toggleColorBefore: "#383838",
  toggleColorAfter: "#cccccc",
  toggleLabelColor: "#ffffff",
  buttonBg: "#0bbdab",
  buttonColor: "#ffffff",
  logo1: "#0bbdab",
  logo2: "#ffffff",
};

export const DashHeadWrap = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .darkMode {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 1.5rem;

    &__para {
      font-size: 1rem;
      text-align: center;
      color: ${(props) =>
        props.isDark
          ? darkTheme.toggleLabelColor
          : lightTheme.toggleLabelColor};
    }
  }

  .switch {
    display: inline-block;
    height: 14px;
    position: relative;
    width: 40px;
    margin-bottom: 0.5rem;
  }

  .switch input {
    display: none;
  }

  .slider {
    background-color: ${lightTheme.toggleColorBefore};
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }

  .slider:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 6px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 6px;
  }

  input:checked + .slider {
    background-color: ${lightTheme.toggleColorAfter};
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .logo1 {
    font-family: "Anton", sans-serif;
    font-size: 3.5rem;
    font-weight: 600;
    letter-spacing: 0.2rem;
    line-height: 100%;
    color: ${(props) => (props.isDark ? darkTheme.logo1 : lightTheme.logo1)};
    margin-top: 0.5rem;

    ${media.mobile} {
      width: 40%;
      margin-left: 2rem;
    }
  }

  .logo2 {
    font-size: 2.5rem;
    color: ${(props) => (props.isDark ? darkTheme.logo2 : lightTheme.logo2)};
  }

  .logoutDiv {
    display: flex;
    flex-direction: row;
    align-items: center;

    &__Btn {
      border: none;
      padding: 0.8rem 2rem;
      border-radius: 5px;
      font-weight: 700;
      background: ${(props) =>
        props.isDark ? darkTheme.buttonBg : lightTheme.buttonBg};
      color: ${(props) =>
        props.isDark ? darkTheme.buttonColor : lightTheme.buttonColor};

      :hover {
        cursor: pointer;
      }

      :focus {
        outline: none;
      }
    }
  }
`;
