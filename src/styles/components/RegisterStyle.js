import styled from 'styled-components';

const lightTheme = {
    registerBg:"#f0912b",
    quoteColor:"#ffffff",
    quoteShadow:"#b50000",
}

const darkTheme = {
    registerBg:"#1c1c1c",
    quoteColor:"#0bbdab",
    quoteShadow:"#000000",
}

const media = {
    mobile:'@media(max-width:600px)'
}

export const RegisterWrapper = styled.div`
    background: ${props => props.isDark ? darkTheme.registerBg : lightTheme.registerBg};
    display:flex;
    flex-direction:row;

    ${media.mobile} {
        flex-direction:column;
    }

    .registerCol1 {
        width: 40%;

        ${media.mobile} {
            display:none;
        }
    }

    .bookImg {
        width: 100%;
    }

    .registerCol2 {
        width: 60%;
        padding: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        ${media.mobile} {
            width: 100%;
            padding: 4rem;
        }
    }

    .quote1 {
        margin-top: 4rem;
        color: ${props => props.isDark ? darkTheme.quoteColor : lightTheme.quoteColor};
        font-size: 4rem;
        line-height: 140%;
        text-shadow: 3px 3px ${props => props.isDark ? darkTheme.quoteShadow : lightTheme.quoteShadow};
        text-align: center;
        font-family: 'Abril Fatface', cursive;

        ${media.mobile} {
            font-size: 3rem;
        }
    }
`;