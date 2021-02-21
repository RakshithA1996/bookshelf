import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setDark from '../../redux/actions/setDark';
import {Link} from 'react-scroll';
import { HeaderWrapper, HeaderButtonWrap } from '../../styles/components/HeaderStyle';

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
            <div className="logo1">BOOK<span className="logo2">stron</span></div>
            {/* <div className="search">
                <input className="searchBar" placeholder="search . . ." />
                <img className="searchImg" src={blackSearch} alt="blackSearch" />
            </div> */}
            <HeaderButtonWrap isDark={isDark}>
                <div className="darkMode">
                    <div className="darkMode__para">{isDark ? 'Light' : 'Dark'}</div>
                    <label className="switch" htmlFor="checkbox">
                        <input type="checkbox" id="checkbox" onChange={() => toggleDarkMode(isDark)} checked={isDark} />
                        <div className="slider round"></div>
                    </label>
                </div>
                <Link className="linkScroll" to="signup"  >
                    <button className="signUpHeader" >
                        Sign Up
                    </button>
                </Link>
                <button className="loginHeader" onClick={props.toggleLogin}>Login</button>
            </HeaderButtonWrap>
        </HeaderWrapper>
    )
}