import React, {useEffect, useRef} from 'react';
import {Power3, TimelineLite, TweenMax} from "gsap";
import ResumeFile from "../img/file.svg";
import Instagram from "../img/instagram.svg";
import Github from "../img/github.svg";
import Linkedin from "../img/linkedin.svg";

import "./header.scss"

const Header = () => {
    let app = useRef(null);
    let content = useRef(null);

    let tl = new TimelineLite({ delay: 0.8});
    useEffect(() => {
        const headlineFirst = content;
        TweenMax.to(app, 0, {css: {visibility: "visible"}});

        //Image Animation

        //Content Animation
        tl.from(headlineFirst, 1.2, {
            x: -30,
            ease: Power3.easeOut,
            opacity: 0},'Start')
    }, [tl])
    return (
        <div className="header-list" ref={el => app = el}>
            <ul ref={el => content = el}>
                <li>
                    <img src={Github} alt="profile" className="icon" width={20} height={20}/>
                    <a href="https://github.com/thobiejovian">GitHub</a>
                </li>
                <li>
                    <img src={Linkedin} alt="profile" className="icon" width={20} height={20}/>
                    <a href="">LinkedIn</a>
                </li>
                <li>
                    <img src={Instagram} alt="profile" className="icon" width={20} height={20}/>
                    <a href="">Instagram</a>
                </li>
                <li>
                    <img src={ResumeFile} alt="profile" className="icon" width={20} height={20}/>
                    <a href="">Résumé</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;