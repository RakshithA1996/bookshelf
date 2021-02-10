import styled from 'styled-components';

const lightTheme = {
    headerBg:"#ffffff",
    logo1:"#f0912b",
    logo2:"#383838",
    searchColor:"#000000",
    searchBorder:"1px solid #383838",
} 

export const HeaderWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    position:fixed;
    top:0;
    width:100%;
    padding: 2rem 0;
    background: ${lightTheme.headerBg};
    box-shadow: ${props => props.isBorder ? "0 8px 6px -6px #a1a1a1" : "none"};
    
    .logo1 {
        font-family: 'Anton', sans-serif;
        font-size:5rem;
        font-weight:600;
        letter-spacing: 0.2rem;
        line-height:100%;
        margin-left: 4rem;
        color: ${lightTheme.logo1};
        margin-top: 0.5rem;
    }

    .logo2 {
        font-size:3rem;
        color: ${lightTheme.logo2};
    }

    .search {
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:flex-end;
        margin-right: 4rem;
        width:0px;
        transition: width 2s;
    }

    .searchBar {
        background: transparent;
        border: none;
        width: 100%;
        padding-bottom: 0.8rem;
        color: ${lightTheme.searchColor};
        border-bottom: ${lightTheme.searchBorder};
        margin-right: 1.5rem;
    }

    .search:hover {
        width:20%
    }

    .searchBar:focus {
        outline:none
    }

    .searchImg {
        width: 25px;
        height: 25px
    }

    .searchImg:hover {
        cursor: pointer;
    }

    
`;