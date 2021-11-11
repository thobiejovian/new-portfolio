import React, {useRef, useEffect} from "react";
import {TweenMax, TimelineLite, Power3} from 'gsap';
import Header from "../Header/Header";
import Profile from "../img/landing1.jpg";
import './LandingSection.css'
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";

const LandingSection = () => {
    let app = useRef(null);
    let images = useRef(null);
    let content = useRef(null);

    let tl = new TimelineLite({ delay: 0.8});
    useEffect(() => {
        const profileImage = images;
        const headlineFirst = content.children[0];
        const headlineSecond = headlineFirst.nextSibling;
        TweenMax.to(app, 0, {css: {visibility: "visible"}});

        //Image Animation
        tl.staggerFrom(profileImage,1.2 ,{
            y: 10,
            ease: Power3.easeOut,
            opacity: 0,
            scale: 1.6,
        },.10 , 'Start')
        //Content Animation
        tl.staggerFrom([headlineFirst, headlineSecond], 1 ,{
            y: 30,
            ease: Power3.easeOut,
            opacity: 0,
            delay: .8
        }, .20 , 'Start')
    }, [])
    return (
        <div className="landing-section" ref={el => app = el}>
            <div className="container">
                <div className="left-content" ref={el => content = el}>
                    <span className="work-title">Frontend Developer + Cat Enthusiast</span>
                    <span className="name-title">Thobie Jovian</span>
                    <div className="header-desktop"><Header/></div>
                    <div className="header-mobile"><Header/></div>
                </div>
                <div className="right-content" ref={el => images = el}>
                    <img src={Profile} alt="profile" className="profile-img"/>
                </div>
            </div>
        </div>
    );
};

export default LandingSection;