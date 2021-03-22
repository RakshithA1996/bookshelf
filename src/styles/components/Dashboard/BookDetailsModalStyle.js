import styled from "styled-components";

const media = {
  mobile: "@media(max-width:600px)",
};

const lightTheme = {
  containerBg: "#ffffff",
  headerPara: "#000000",
  detailsBg: "#f0912b",
  detailsLabel: "#000000",
  detailsPara: "#000000",
};

const darkTheme = {
  containerBg: "#141414",
  headerPara: "#ffffff",
  detailsBg: "#000000",
  detailsLabel: "#0bbdab",
  detailsPara: "#e5e5e5",
};

export const BookDetailsModalWrap = styled.div`
  display: flex;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);

  .Container {
    background-color: ${(props) =>
      props.isDark ? darkTheme.containerBg : lightTheme.containerBg};
    margin: auto;
    width: 60%;
    padding: 1.6rem;
    /* font-size: 2.5rem;
    font-weight: 600;
    color: #1670f7;
    line-height: 150%; */

    &__Header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.6rem;
      color: ${(props) =>
        props.isDark ? darkTheme.headerPara : lightTheme.headerPara};

      &--Para {
        font-size: 2rem;
        font-weight: 600;
        line-height: 120%;
      }

      &--Img {
        cursor: pointer;
      }
    }

    &__Body {
      display: flex;
      flex-direction: row;

      &--Col1 {
        width: 30%;

        &__Img {
          width: 100%;
        }
      }

      &--Col2 {
        width: 70%;
        margin-left: 1.6rem;
        padding: 1.6rem;
        background: ${(props) =>
          props.isDark ? darkTheme.detailsBg : lightTheme.detailsBg};

        &__Row {
          display: flex;
          flex-direction: row;
          margin-bottom: 1.4rem;
          font-size: 1.6rem;

          &--Label {
            width: 20%;
            font-weight: 700;
            color: ${(props) =>
              props.isDark ? darkTheme.detailsLabel : lightTheme.detailsLabel};
          }
          &--Colan {
            width: 5%;
            font-weight: 700;
            color: ${(props) =>
              props.isDark ? darkTheme.detailsLabel : lightTheme.detailsLabel};
          }
          &--Para {
            width: 75%;
            color: ${(props) =>
              props.isDark ? darkTheme.detailsPara : lightTheme.detailsPara};
            line-height: 150%;
          }
        }
      }
    }
  }
`;
