import styled from 'styled-components';

const lightTheme = {
    popularBg:"#f0912b",
    quoteColor:"#ffffff",
    quoteShadow:"#b50000",
}

const media = {
    mobile:'@media(max-width:600px)'
}

export const PopularWrapper = styled.div`
    background: ${lightTheme.popularBg};
    display:flex;
    flex-direction:row;

    ${media.mobile} {
        flex-direction:column;
    }

    .popularCol1 {
        width: 40%;

        ${media.mobile} {
            display:none;
        }
    }

    .bookImg {
        width: 100%;
    }

    .popularCol2 {
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
        color: ${lightTheme.quoteColor};
        font-size: 4rem;
        line-height: 140%;
        text-shadow: 3px 3px ${lightTheme.quoteShadow};
        text-align: center;
        font-family: 'Abril Fatface', cursive;

        ${media.mobile} {
            font-size: 3rem;
        }
    }
`;