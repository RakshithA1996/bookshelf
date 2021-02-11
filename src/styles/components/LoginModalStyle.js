import styled from 'styled-components';

const lightTheme = {
    modalBg:"#ffffff;"
}

const darkTheme = {
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
        background-color: #ffffff;
        margin: auto;
        width: 30%;
        padding:1.6rem;
        border-radius: 4px;

        @include respond(phone) {
            width: 100%;
        }

        &__header {
            font-family: 'Anton', sans-serif;
            font-size: 2rem;
            letter-spacing:0.1rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            &--img {
                &:hover {
                    cursor: pointer;
                }
            }
        }

        &__body {
            margin-top:1.6rem;

            &--input {
                width: 100%;
                padding: 1.2rem;
                border: 1px solid #e5e5e5;
                border-radius: 5px;
                margin-bottom: 1.6rem;

                &:focus {
                    outline:none;
                    border: 0.1rem solid blue;
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
                color:#f0912b;
                background:#383838;

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