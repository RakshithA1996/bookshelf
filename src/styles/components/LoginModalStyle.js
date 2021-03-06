import styled from "styled-components";

const lightTheme = {
  modalBg: "#ffffff",
  headerColor: "#000000",
  inputBoder: "1px solid #383838",
  inputColor: "#000000",
  inputBorderFocus: "#f0912b",
  buttonBg: "#383838",
  buttonColor: "#f0912b",
  errorColor: "red",
};

const darkTheme = {
  modalBg: "#141414",
  headerColor: "#ffffff",
  inputBoder: "1px solid #383838",
  inputColor: "#ffffff",
  inputBorderFocus: "#0bbdab",
  buttonBg: "#969696",
  buttonColor: "#383838",
  borderColor: "#383838",
  errorColor: "#0bbdab",
};

const media = {
  mobile: "@media(max-width:600px)",
};

export const LoginModalWrapper = styled.div`
  display: flex;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.6);

  .container {
    background-color: ${(props) =>
      props.isDark ? darkTheme.modalBg : lightTheme.modalBg};
    margin: auto;
    width: 30%;
    padding: 1.6rem;
    border-radius: 4px;
    border: 2px solid
      ${(props) => (props.isDark ? darkTheme.borderColor : "none")};

    ${media.mobile} {
      width: 100%;
      position: absolute;
      bottom: 0;
      padding: 3rem;
      border-radius: 20px 20px 0 0;
      border: none;
    }

    &__header {
      font-family: "Anton", sans-serif;
      font-size: 2rem;
      letter-spacing: 0.1rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      color: ${(props) =>
        props.isDark ? darkTheme.headerColor : lightTheme.headerColor};

      &--img {
        &:hover {
          cursor: pointer;
        }
      }
    }

    &__body {
      margin-top: 1.6rem;

      ${media.mobile} {
        padding-bottom: 30rem;
        margin-top: 4.6rem;
      }

      &--input {
        width: 100%;
        padding: 1.6rem;
        color: ${(props) =>
          props.isDark ? darkTheme.inputColor : lightTheme.inputColor};
        border: ${(props) =>
          props.isDark ? darkTheme.inputBoder : lightTheme.inputBoder};
        border-radius: 5px;
        margin-bottom: 1.9rem;
        background: ${(props) =>
          props.isDark ? darkTheme.modalBg : lightTheme.modalBg};

        ${media.mobile} {
          margin-bottom: 2.6rem;
        }

        &:focus {
          outline: none;
          border: 2px solid
            ${(props) =>
              props.isDark
                ? darkTheme.inputBorderFocus
                : lightTheme.inputBorderFocus};
        }
      }

      &--formError {
        color: ${(props) =>
          props.isDark ? darkTheme.errorColor : lightTheme.errorColor};
        font-size: 1.2rem;
        margin-top: -1.6rem;
      }
    }

    &__footer {
      width: 100%;

      &--button {
        font-family: "Anton", sans-serif;
        float: right;
        padding: 0.8rem 0;
        width: 20%;
        border: none;
        border-radius: 5px;
        letter-spacing: 0.1rem;
        color: ${(props) =>
          props.isDark ? darkTheme.buttonColor : lightTheme.buttonColor};
        background: ${(props) =>
          props.isDark ? darkTheme.buttonBg : lightTheme.buttonBg};

        ${media.mobile} {
          width: 100%;
          padding: 1.4rem 0;
        }

        &:hover {
          cursor: pointer;
        }

        &:focus {
          outline: none;
        }
      }
    }
  }
`;
