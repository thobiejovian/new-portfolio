import React from 'react';
import ResumeFile from "../img/file.svg";
import Instagram from "../img/instagram.svg";
import Github from "../img/github.svg";
import Linkedin from "../img/linkedin.svg";

import "./header.scss"

const Header = () => {
    return (
        <div className="header-list">
            <ul>
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