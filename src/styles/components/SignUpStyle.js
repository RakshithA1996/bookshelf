import styled from 'styled-components';

const lightTheme = {
    formBg:"#ffffff",
    formHeaderColor:"#000000",
    formInputBg:"#ffffff",
    formInputColor:"#000000",
    inputBorder:"#383838",
    inputBorderFocus:"#f0912b",
    buttonBg:"#383838",
    buttonColor:"#f0912b",
    errorColor:"red",
}

const darkTheme = {
    formBg:"#000000",
    formHeaderColor:"#ffffff",
    formInputBg:"#000000",
    formInputColor:"#ffffff",
    inputBorder:"#383838",
    inputBorderFocus:"#0bbdab",
    buttonBg:"#969696",
    buttonColor:"#383838",
    errorColor:"#0bbdab",
}

export const SignUpWrapper = styled.div`
    padding: 2rem;
    padding-top:2.5rem;
    background: ${props => props.isDark ? darkTheme.formBg : lightTheme.formBg};
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    .formHeader {
        font-family: 'Anton',sans-serif;
        font-size: 3rem;
        margin-bottom: 2.4rem;
        color: ${props => props.isDark ? darkTheme.formHeaderColor : lightTheme.formHeaderColor}
    }

    .formInput {
        padding: 2rem;
        border-radius: 5px;
        margin-bottom: 1.8rem;
        background:${props => props.isDark ? darkTheme.formInputBg : lightTheme.formInputBg};
        color:${props => props.isDark ? darkTheme.formInputColor : lightTheme.formInputColor};
        border: 1px solid ${lightTheme.inputBorder};
    }

    .formInput:focus {
        outline:none;
        border: 2px solid ${props => props.isDark ? darkTheme.inputBorderFocus : lightTheme.inputBorderFocus};
    }

    .formButton {
        margin-top: 2.2rem;
        padding: 1.8rem;
        border: none;
        border-radius: 6px;
        background: ${props => props.isDark ? darkTheme.buttonBg : lightTheme.buttonBg};
        font-size:2.1rem;
        font-family: 'Anton',sans-serif;
        color: ${props => props.isDark ? darkTheme.buttonColor : lightTheme.buttonColor};

        &:hover{
            cursor: pointer;
        }

        &:focus {
            outline:none;
        }
    }

    .formError {
        color:${props => props.isDark ? darkTheme.errorColor : lightTheme.errorColor};
        font-size:1.2rem;
        margin-top: -1.8rem;
    }
`;