import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import close from "../../images/close.png";
import closeW from "../../images/closeW.png";
import { LoginModalWrapper } from '../../styles/components/LoginModalStyle';

export const LoginModal = (props) => {
    const isDark = useSelector(state => state.dark.mode);

    return (
        <LoginModalWrapper isDark={isDark}>
            <div className="container">
                <div className="container__header">
                    <div className="container__header--name">Login</div>
                    <img className="container__header--img" onClick={props.toggleLogin} src={isDark ? closeW : close} />
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