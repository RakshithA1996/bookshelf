import React from 'react';
import { useSelector } from 'react-redux';
import { SignUpWrapper } from '../../styles/components/SignUpStyle';

export const SignUpForm = () => {
    const isDark = useSelector(state => state.dark.mode);
    return (
        <SignUpWrapper isDark={isDark}>
            <div className="formHeader">Register to buy books</div>
            <input className="formInput" placeholder="eg. Rakshith Acharya" />
            <input className="formInput" placeholder="eg. 9999999999" />
            <input className="formInput" placeholder="eg. example.company.com" />
            <button className="formButton">Submit</button>
        </SignUpWrapper>
    )
}