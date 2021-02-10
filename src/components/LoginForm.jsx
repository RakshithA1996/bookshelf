import React from 'react';
import { useSelector } from 'react-redux';
import { LoginWrapper } from '../styles/components/LoginStyle';

export const LoginForm = () => {
    const isDark = useSelector(state => state.dark.mode);
    return (
        <LoginWrapper isDark={isDark}>
            <div className="formHeader">Register to buy books</div>
            <input className="formInput" placeholder="eg. Rakshith Acharya" />
            <input className="formInput" placeholder="eg. 9999999999" />
            <input className="formInput" placeholder="eg. example.company.com" />
            <button className="formButton">Submit</button>
        </LoginWrapper>
    )
}