import styled from "styled-components";

const media = {
  mobile: "@media(max-width:600px)",
};

const lightTheme = {
  paraColor: "#000000",
  labelColor: "#000000",
};

const darkTheme = {
  paraColor: "#ffffff",
  labelColor: "#0bbdab",
};

export const DashPopularWrap = styled.div`
  width: 100%;
  font-size: 1.25rem;
  line-height: 160%;
  color: ${(props) =>
    props.isDark ? darkTheme.paraColor : lightTheme.paraColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  .bookCover {
    width: 65%;
    max-height: 290px
  }
  .bookName {
    margin-top: 1rem;
  }
  .bookAuthor,
  .bookName,
  .bookPublish {
    display: flex;
    flex-direction: row;
  }

  .bookLabel {
    margin-right: 0.2rem;
    font-weight: 700;
    color: ${(props) =>
      props.isDark ? darkTheme.labelColor : lightTheme.labelColor};
  }
`;
