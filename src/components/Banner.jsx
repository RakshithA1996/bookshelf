import React from 'react';
import book1 from "../images/book4.png";
import bookBg from "../images/bookBg.png";
import { useSelector } from 'react-redux';
import { BannerWarapper } from '../styles/components/BannerStyle';

export const Banner = () => {
    const isDark = useSelector(state => state.dark.mode);
    return(
        <BannerWarapper isDark={isDark}>
            <div className="bannerCol1">
                <span className="para1">Books give plenty of joy to students, and they learn a lot of things from books. </span>
                <span className="para2">"Books help to inspire students to do hard work with courage and hope". </span>
                <span className="para1">They take them into a unique world of imagination and improve their standard of living. </span>
                <span className="para1">They enrich the experience of students and sharpen their intellect. </span>
            </div>
            <div className="bannerCol2">
                <img className="bannerImg" src={book1} alt="book" />
            </div>
            <div className="bannerColMobile">
                <img className="bannerImgMb" src={bookBg} alt="book" />
            </div>
        </BannerWarapper>
    )
}
