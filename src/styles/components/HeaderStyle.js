import styled from 'styled-components';

const media = {
    mobile:'@media(max-width:600px)'
}

const lightTheme = {
    headerBg:"#ffffff",
    logo1:"#f0912b",
    logo2:"#383838",
    searchColor:"#000000",
    searchBorder:"1px solid #383838",
    signUpBg:"#f0912b",
    signUpColor:"#ffffff",
    loginBg:"#b50000",
    loginColor:"#ffffff",
    toggleColorBefore:"#383838",
    toggleColorAfter:"#757575",
    toggleLabelColor:"#383838",
    boxShadow:"#a1a1a1",
} 

const darkTheme = {
    headerBg:"#000000",
    logo1:"#0bbdab",
    logo2:"#ffffff",
    searchColor:"#000000",
    searchBorder:"1px solid #383838",
    signUpBg:"#0bbdab",
    signUpColor:"#ffffff",
    loginBg:"#757575",
    loginColor:"#ffffff",
    toggleColorBefore:"#383838",
    toggleColorAfter:"#cccccc",
    toggleLabelColor:"#ffffff",
    boxShadow:"#616161",
} 

export const HeaderWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    position:fixed;
    top:0;
    z-index:1;
    width:100%;
    padding: 1.2rem 0;
    background: ${props => props.isDark ? darkTheme.headerBg : lightTheme.headerBg};
    box-shadow: ${props => props.isBorder ? `0 8px 6px -6px ${darkTheme.boxShadow}` : "none"};
    
    .logo1 {
        width: 50%;
        font-family: 'Anton', sans-serif;
        font-size:3.5rem;
        font-weight:600;
        letter-spacing: 0.2rem;
        line-height:100%;
        margin-left: 4rem;
        color: ${props => props.isDark ? darkTheme.logo1 : lightTheme.logo1};
        margin-top: 0.5rem;

        ${media.mobile} {
            width: 40%;
            margin-left: 2rem;
        }
    }

    .logo2 {
        font-size:2.5rem;
        color: ${props => props.isDark ? darkTheme.logo2 : lightTheme.logo2};
    }

    /* .search {
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
    } */
`;

export const HeaderButtonWrap = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-end;
    margin-right:4rem;
    width: 50%;
    font-size: 1.3rem;

    ${media.mobile} {
        width: 60%;
        margin-right: 2rem;
    }

    .darkMode {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin-right: 1.5rem;

        &__para {
            font-size:1rem;
            text-align:center;
            color: ${props => props.isDark ? darkTheme.toggleLabelColor : lightTheme.toggleLabelColor}
        }
    }

    .switch {
        display: inline-block;
        height: 14px;
        position: relative;
        width: 40px;
        margin-bottom:0.5rem;
    }

    .switch input {
        display:none;
    }

    .slider {
        background-color: ${lightTheme.toggleColorBefore};
        bottom: 0;
        cursor: pointer;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: .4s;
    }

    .slider:before {
        background-color: #fff;
        bottom: 4px;
        content: "";
        height: 6px;
        left: 4px;
        position: absolute;
        transition: .4s;
        width: 6px;
    }

    input:checked + .slider {
        background-color:  ${lightTheme.toggleColorAfter};
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

    .signUpHeader {
        width: 100%;
        border:none;
        padding: 0.8rem 0rem;
        border-radius: 5px;
        background: ${props => props.isDark ? darkTheme.signUpBg :lightTheme.signUpBg};
        color: ${props => props.isDark ? darkTheme.signUpColor :lightTheme.signUpColor};
    }

    .linkScroll {
        width:13%;

        ${media.mobile} {
            width: 25%;
        }
    }

    .loginHeader {
        width: 13%;
        border:none;
        padding: 0.8rem 0rem;
        border-radius: 5px;
        margin-left: 1rem;
        background: ${props => props.isDark ? darkTheme.loginBg :lightTheme.loginBg};
        color: ${props => props.isDark ? darkTheme.loginColor :lightTheme.loginColor};

        ${media.mobile} {
            width: 25%;
        }
    }

    .signUpHeader:hover, .loginHeader:hover {
        cursor: pointer;
    }

    .signUpHeader:focus, .loginHeader:focus {
       outline:none;
    }
`;