import React from 'react';
import blackSearch from "../images/blackSearch.png";
import { HeaderWrapper } from '../styles/components/HeaderStyle';

export const Header = (props) => {
    return (
        <HeaderWrapper isBorder={props.isBorder}>
            <div className="logo1">BOOK<span className="logo2">shelf</span></div>
            <div className="search">
                <input className="searchBar" placeholder="search . . ." />
                <img className="searchImg" src={blackSearch} alt="blackSearch" />
            </div>
        </HeaderWrapper>
    )
}