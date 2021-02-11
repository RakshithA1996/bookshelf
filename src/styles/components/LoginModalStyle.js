import styled from 'styled-components';

const lightTheme = {
    modalBg:"#ffffff",
    headerColor:"#000000",
    inputBoder:"1px solid #383838",
    inputBorderFocus:"#f0912b",
    buttonBg:"#383838",
    buttonColor:"#f0912b"
}

const darkTheme = {
    modalBg:"#000000",
    headerColor:"#ffffff",
    inputBoder:"1px solid #383838",
    inputBorderFocus:"#0bbdab",
    buttonBg:"#969696",
    buttonColor:"#383838",
    borderColor:"#383838"
}

const media = {
    mobile:'@media(max-width:600px)'
}

export const LoginModalWrapper = styled.div`
    display: flex;
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.6);

    .container {
        background-color: ${props => props.isDark ? darkTheme.modalBg : lightTheme.modalBg};
        margin: auto;
        width: 30%;
        padding:1.6rem;
        border-radius: 4px;
        border: 2px solid ${props => props.isDark ? darkTheme.borderColor : "none"};

        ${media.mobile} {
            width: 100%;
            position:absolute;
            bottom:0;
            padding: 3rem;
            border-radius:20px 20px 0 0;
        }

        &__header {
            font-family: 'Anton', sans-serif;
            font-size: 2rem;
            letter-spacing:0.1rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            color: ${props => props.isDark ? darkTheme.headerColor : lightTheme.headerColor};

            &--img {
                &:hover {
                    cursor: pointer;
                }
            }
        }

        &__body {
            margin-top:1.6rem;

            ${media.mobile} {
                padding-bottom: 30rem;
                margin-top:2.6rem;
            }

            &--input {
                width: 100%;
                padding: 1.6rem;
                border: ${props => props.isDark ? darkTheme.inputBoder : lightTheme.inputBoder};
                border-radius: 5px;
                margin-bottom: 1.6rem;
                background: ${props => props.isDark ? darkTheme.modalBg : lightTheme.modalBg};

                ${media.mobile} {
                    margin-bottom:2.6rem;
                }

                &:focus {
                    outline:none;
                    border: 1px solid ${props => props.isDark ? darkTheme.inputBorderFocus : lightTheme.inputBorderFocus};
                }
            }
        }

        &__footer {
            width: 100%;

            &--button {
                font-family: 'Anton', sans-serif;
                float:right;
                padding: 0.8rem 0;
                width: 20%;
                border:none;
                border-radius: 5px;
                letter-spacing:0.1rem;
                color:${props => props.isDark ? darkTheme.buttonColor : lightTheme.buttonColor};
                background:${props => props.isDark ? darkTheme.buttonBg : lightTheme.buttonBg};

                ${media.mobile} {
                   width:100%;
                   padding: 1.4rem 0;
                }

                &:hover {
                    cursor: pointer;
                }

                &:focus {
                    outline:none;
                }
            }
        }
    }
`;