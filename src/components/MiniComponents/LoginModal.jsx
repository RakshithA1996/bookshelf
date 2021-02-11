import React from 'react';
import close from "../../images/close.png";
import closeW from "../../images/closeW.png";
import { LoginModalWrapper } from '../../styles/components/LoginModalStyle';

export const LoginModal = (props) => {
    return (
        <LoginModalWrapper>
            <div className="container">
                <div className="container__header">
                    <div className="container__header--name">Login</div>
                    <img className="container__header--img" onClick={props.toggleLogin} src={close} />
                </div>
                <div className="container__body">
                    <input className="container__body--input" placeholder="eg. example@company.com" />
                    <input className="container__body--input" placeholder="eg. sdHsdADS12a@as" />
                </div>
                <div className="container__footer">
                    <button className="container__footer--button">Submit</button>
                </div>
            </div>
        </LoginModalWrapper>
    )
}