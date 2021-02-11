import styled from 'styled-components';

const lightTheme = {
    featureBg:"#ffffff",
    featureHeadColor:"#f0912b",
    featureSubHeadColor:"#b50000",
    featureSubDes:"#000000",
    featureImgBg:"#ffffff",
}

const darkTheme = {
    featureBg:"#000000",
    featureHeadColor:"#ffffff",
    featureSubHeadColor:"#ffffff",
    featureSubDes:"#757575",
    featureImgBg:"#0bbdab",
}

const media = {
    mobile:'@media(max-width:600px)'
}

export const FeatureWrapper = styled.div`
    background: ${props => props.isDark ? darkTheme.featureBg : lightTheme.featureBg};
    padding:10rem;
    padding-bottom:14rem;

    ${media.mobile} {
        padding:6rem;
    }

    .featureHeader{
        text-align:center;
        font-family: 'Anton',sans-serif;
        font-size: 5rem;
        line-height:150%;
        margin-bottom: 6rem;
        color: ${props => props.isDark ? darkTheme.featureHeadColor : lightTheme.featureHeadColor};
    }

    .featureBody{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10rem;
        width: 100%;

        ${media.mobile} {
            display:none;
        }

        &__container {
            display:flex;
            flex-direction:column;
            justify-content:flex-start;
            align-items: center;
            text-align:center;

            ${media.mobile} {
                margin-bottom: 3rem;
                display:flex !important;
            }

            &--image {
                margin-bottom: 4rem;
                padding:1rem;
                padding-bottom:0.4rem;
                border-radius:20px;
                background: ${props => props.isDark ? darkTheme.featureImgBg : lightTheme.featureImgBg};

                ${media.mobile} {
                    width: 40%;
                    padding-bottom:1rem;
                    display:flex;
                    align-items: center;
                    justify-content: center;
                }

                &__img{
                    width: 100px;
                    height: 100px;
                }
            }

            &--heading {
                margin-bottom: 2rem;
                font-size: 3rem;
                word-spacing:0.6rem;
                font-family: 'Abril Fatface',cursive;
                color: ${props => props.isDark ? darkTheme.featureSubHeadColor : lightTheme.featureSubHeadColor};
            }

            &--description {
                font-size:2rem;
                line-height:150%;
                font-family: 'Yusei Magic',sans-serif;
                color: ${props => props.isDark ? darkTheme.featureSubDes : lightTheme.featureSubDes};
            }
        }
    }

    .featureCarousel{
        display:none;

        ${media.mobile} {
            display:block;
        }
    }

    /* .ftQQrU .featureBody__container {
        display:flex !important;
    } */
`;