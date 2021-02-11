import React from 'react';
import icon1 from "../../images/face.png";
import icon2 from "../../images/book.png";
import icon3 from "../../images/lang.webp";
import {useSelector} from 'react-redux';
import { FeatureWrapper } from '../../styles/components/FeatureStyle';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Features = () => {
    const isDark = useSelector(state => state.dark.mode);
    const featureArray = useSelector( state => state.features.featureArr );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return(
        <FeatureWrapper isDark={isDark}>
            <div className="featureHeader">Features</div>
            <div className="featureBody">
                {featureArray.map((data)=>{
                    return (
                        <div className="featureBody__container" key={data.id}>
                            <div className="featureBody__container--image">
                                <img 
                                    className="featureBody__container--image__img"
                                    src={data.id === 0 ?
                                        icon1 :
                                        data.id === 1 ?
                                        icon2 : 
                                        icon3
                                    } 
                                />
                            </div>
                            <div className="featureBody__container--heading">{data.heading}</div>
                            <div className="featureBody__container--description">{data.description}</div>
                        </div>
                    )
                })}
            </div>
            <div className="featureCarousel">
                <Slider {...settings}>
                    {featureArray.map((data)=>{
                        return (
                            <div className="featureBody__container" key={data.id}>
                                <div className="featureBody__container--image">
                                    <img 
                                        className="featureBody__container--image__img"
                                        src={data.id === 0 ?
                                            icon1 :
                                            data.id === 1 ?
                                            icon2 : 
                                            icon3
                                        } 
                                    />
                                </div>
                                <div className="featureBody__container--heading">{data.heading}</div>
                                <div className="featureBody__container--description">{data.description}</div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </FeatureWrapper>
    )
}
