import React from 'react';
import { useSelector } from 'react-redux';
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import { FooterWrapper } from '../../styles/components/FooterStyle';

export const Footer = () => {
    const isDark = useSelector(state => state.dark.mode);

    const openLink = (url) => {
        window.open(url)
    }

    return (
        <FooterWrapper isDark={isDark}>
            <div className="footerCol1">
                <div className="footerCol1__createdLabel">Created By :</div>
                <div className="footerCol1__createdName">Rakshith Acharya</div>
            </div>
            <div className="footerCol2">
                <div className="footerCol2__content1">
                    <div className="footerCol2__content1--row1">
                        <div className="footerCol2__content1--row1__label">Contact No.</div>
                        <div className="footerCol2__content1--row1__colan"> : </div>
                        <div className="footerCol2__content1--row1__number">+91-7019892499</div>
                    </div>
                    <div className="footerCol2__content1--row2">
                        <div className="footerCol2__content1--row2__label">Email</div>
                        <div className="footerCol2__content1--row2__colan"> : </div>
                        <div className="footerCol2__content1--row2__number">rakshithacharya75@gmail.com</div>
                    </div>
                </div>
                <div className="footerCol2__content2">
                    <div className="footerCol2__content2--row1" onClick={()=>openLink('https://www.linkedin.com/in/rakshith-acharya-640000181/')}>
                        <img className="footerCol2__content2--row1__img" src={linkedin} alt="linkedin" />
                        <div className="footerCol2__content2--row1__para">LinkedIn</div>
                    </div>
                    <div className="footerCol2__content2--row2" onClick={()=>openLink('https://github.com/RakshithA1996')}>
                        <img className="footerCol2__content2--row2__img" src={github} alt="github" />
                        <div className="footerCol2__content2--row2__para">GitHub</div>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    )
}