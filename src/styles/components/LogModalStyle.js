import styled from "styled-components";

const lightTheme = {
  modalBg: "#ffffff",
  btnHigh: "#f0912b",
  btnColor: "#ffffff",
  modalPara: "#000000",
};

const darkTheme = {
  modalBg: "#353535",
  btnHigh: "#0bbdab",
  btnColor: "#353535",
  modalPara: "#ffffff",
};

const media = {
  mobile: "@media(max-width:600px)",
};

export const LogModalWrap = styled.div`
  display: flex;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(0, 0, 0, 0.6);

  .container {
    background: ${(props) =>
      props.isDark ? darkTheme.modalBg : lightTheme.modalBg};
    width: 25%;
    padding: 2rem;
    margin: auto;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__para {
      font-size: 1.6rem;
      margin-bottom: 2rem;
      color: ${(props) =>
        props.isDark ? darkTheme.modalPara : lightTheme.modalPara};
    }

    &__btnDiv {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;

      &--btn1,
      &--btn2 {
        width: 30%;
        border: none;
        padding: 1rem 2rem;
        border-radius: 4px;
        font-size: 1.4rem;

        &:hover {
          cursor: pointer;
        }

        &:focus {
          outline: none;
        }
      }

      &--btn1 {
        margin-right: 1rem;
      }

      &--btn2 {
        background: ${(props) =>
          props.isDark ? darkTheme.btnHigh : lightTheme.btnHigh};
        color: ${(props) =>
          props.isDark ? darkTheme.btnColor : lightTheme.btnColor};
      }
    }
  }
`;
