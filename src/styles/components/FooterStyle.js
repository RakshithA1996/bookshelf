import styled from 'styled-components';

const lightTheme = {
    footerBg:"#051c38",
    footerCol1Color:"#ffffff",
    footerlLabelColor:"#388fd1",
    footerNameColor:"#e8e8e8",
}

const darkTheme = {
    footerBg:"#ffffff",
    footerCol1Color:"#000000",
    footerlLabelColor:"#051c38",
    footerNameColor:"#000000"
}

const media = {
    mobile:'@media(max-width:600px)'
}

export const FooterWrapper = styled.div`
    padding:12rem 6rem;
    width: 100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    background: ${ props => props.isDark ? darkTheme.footerBg : lightTheme.footerBg};  

    ${media.mobile} {
        flex-direction: column;
        padding: 6rem 4rem;
    }

    .footerCol1 {
        width: 40%;
        font-family: 'Abril Fatface',cursive;
        color: ${ props => props.isDark ? darkTheme.footerCol1Color : lightTheme.footerCol1Color}; 

        ${media.mobile} {
            width: 100%;
            margin-bottom:8rem;
        }

        &__createdLabel{
            font-size: 4rem;
            line-height: 150%;
        }

        &__createdName {
            font-size: 4rem;
            line-height: 150%;
        }
    }

    .footerCol2 {
        width: 60%;
        display:flex;
        flex-direction:row;
        align-items: center;
        justify-content: space-between;

        ${media.mobile} {
            width: 100%;
            flex-direction:column;
        }

        &__content1, &__content2{
            width: 60%;

            ${media.mobile} {
                width: 100%;
            }

            &--row1, &--row2{
                display:flex;
                flex-direction:row;
                align-items:center;
                font-size: 1.4rem;
                margin-bottom: 1rem;
                line-height: 180%;
                color: ${ props => props.isDark ? darkTheme.footerlLabelColor : lightTheme.footerlLabelColor}; 

                &__label {
                    width:30%;
                    font-weight:600;
                }
                &__colan {
                    width:10%;
                    font-weight:600;
                }
                &__number {
                    width:60%;
                    color: ${ props => props.isDark ? darkTheme.footerNameColor : lightTheme.footerNameColor};
                }

                &__img {
                    width: 20px;
                    height: 20px;
                    &:hover {
                        cursor: pointer;
                    }
                }

                &__para {
                    margin-left: 1.2rem;
                    color: ${ props => props.isDark ? darkTheme.footerNameColor : lightTheme.footerNameColor};

                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }

        &__content2 {
            margin-left: 8rem;
            width: 40%;

            ${media.mobile} {
                width: 100%;
                margin-left:0;
                margin-top: 4rem;
                flex-direction:column;
            }
        }
    }
`;