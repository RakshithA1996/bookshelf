import styled from "styled-components";

const media = {
  mobile: "@media(max-width:600px)",
};

const lightTheme = {
  searchBg: "#ffffff",
};

const darkTheme = {
  searchBg: "#e5e5e5",
};

export const SearchWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${(props) =>
    props.isDark ? darkTheme.searchBg : lightTheme.searchBg};
  padding: 1rem;
  border-radius: 5px;
  width: 30%;

  .searchInput {
    width: 100%;
    border: none;
    background: transparent;

    :focus {
      outline: none;
    }
  }
`;
