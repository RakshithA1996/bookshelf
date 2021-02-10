import React from 'react';
import { PopularWrapper } from '../styles/components/PopularStyle';
import { LoginForm } from './LoginForm';
import book2 from "../images/book2.png";

export const PopularBooks = () => {
    return (
        <PopularWrapper>
            <div className="popularCol1">
                <img className="bookImg" src={book2} alt="book" />
            </div>
            <div className="popularCol2">
                <LoginForm />
                <div className="quote1">"If one cannot enjoy reading a book over and over again, there is no use in reading it at all".</div>
            </div>
        </PopularWrapper>
    )
}