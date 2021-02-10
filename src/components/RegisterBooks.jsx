import React from 'react';
import { RegisterWrapper } from '../styles/components/RegisterStyle';
import { LoginForm } from './LoginForm';
import { useSelector } from 'react-redux';
import book2 from "../images/book2.png";

export const PopularBooks = () => {
    const isDark = useSelector(state => state.dark.mode);
    return (
        <RegisterWrapper isDark={isDark}>
            <div className="registerCol1">
                <img className="bookImg" src={book2} alt="book" />
            </div>
            <div className="registerCol2">
                <LoginForm />
                <div className="quote1">"If one cannot enjoy reading a book over and over again, there is no use in reading it at all".</div>
            </div>
        </RegisterWrapper>
    )
}