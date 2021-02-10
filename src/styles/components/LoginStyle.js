import styled from 'styled-components';

const lightTheme = {
    formBg:"#ffffff",
    inputBorder:"#383838",
    inputBorderFocus:"#f0912b",
    buttonBg:"#383838",
    buttonColor:"#f0912b"
}

export const LoginWrapper = styled.div`
    padding: 2rem;
    padding-top:2.5rem;
    background: ${lightTheme.formBg};
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    .formHeader {
        font-family: 'Anton',sans-serif;
        font-size: 3rem;
        margin-bottom: 2.4rem;
    }

    .formInput {
        padding: 2rem;
        border-radius: 5px;
        margin-bottom: 1.8rem;
        border: 1px solid ${lightTheme.inputBorder};
    }

    .formInput:focus {
        outline:none;
        border: 2px solid ${lightTheme.inputBorderFocus};
    }

    .formButton {
        margin-top: 2.2rem;
        padding: 1.8rem;
        border: none;
        border-radius: 6px;
        background: ${lightTheme.buttonBg};
        font-size:2.1rem;
        font-family: 'Anton',sans-serif;
        color: ${lightTheme.buttonColor};

        &:hover{
            cursor: pointer;
        }

        &:focus {
            outline:none;
        }
    }
`;