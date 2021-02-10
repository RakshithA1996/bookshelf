import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setDark from '../redux/actions/setDark';
// import blackSearch from "../images/blackSearch.png";
import { HeaderWrapper, HeaderButtonWrap } from '../styles/components/HeaderStyle';

export const Header = (props) => {
    const isDark = useSelector(state => state.dark.mode);
    const dispatch = useDispatch();

    const toggleDarkMode = (mode) => {
        if(mode){
            dispatch(setDark("IS_LIGHT"));
        }else{
            dispatch(setDark("IS_DARK"));
        }
    }

    return (
        <HeaderWrapper isBorder={props.isBorder} isDark={isDark}>
            <div className="logo1">BOOK<span className="logo2">shelf</span></div>
            {/* <div className="search">
                <input className="searchBar" placeholder="search . . ." />
                <img className="searchImg" src={blackSearch} alt="blackSearch" />
            </div> */}
            <HeaderButtonWrap isDark={isDark}>
                <div className="darkMode">
                    <div className="darkMode__para">{isDark ? 'Light' : 'Dark'}</div>
                    <label class="switch" for="checkbox">
                        <input type="checkbox" id="checkbox" onChange={() => toggleDarkMode(isDark)} checked={isDark} />
                        <div class="slider round"></div>
                    </label>
                </div>
                <button className="signUpHeader" onClick={props.executeScroll}>Sign Up</button>
                <button className="loginHeader">Login</button>
            </HeaderButtonWrap>
        </HeaderWrapper>
    )
}