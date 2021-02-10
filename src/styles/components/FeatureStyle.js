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
    featureSubHeadColor:"#757575",
    featureSubDes:"#10e0cb",
    featureImgBg:"#0bbdab",
}

const media = {
    mobile:'@media(max-width:600px)'
}

export const FeatureWrapper = styled.div`
    background: ${props => props.isDark ? darkTheme.featureBg : lightTheme.featureBg};
    padding:6rem 10rem;
    padding-bottom: 10rem;

    ${media.mobile} {
        padding:6rem;
    }

    .featureHeader{
        text-align:center;
        font-family: 'Anton',sans-serif;
        font-size: 4rem;
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
            }

            &--image {
                margin-bottom: 2rem;
                padding:1rem;
                padding-bottom:0.4rem;
                background: ${props => props.isDark ? darkTheme.featureImgBg : lightTheme.featureImgBg};

                ${media.mobile} {
                    width: 100%;
                    display:flex;
                    align-items: center;
                    justify-content: center;
                }
            }

            &--heading {
                margin-bottom: 1.4rem;
                font-size: 2rem;
                font-family: 'Abril Fatface',cursive;
                color: ${props => props.isDark ? darkTheme.featureSubHeadColor : lightTheme.featureSubHeadColor};
            }

            &--description {
                font-size:1.5rem;
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
`;