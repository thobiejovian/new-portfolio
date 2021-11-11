import React, {useState, useEffect} from 'react';
import "./Navbar.scss"

const Navbar = ({openNav}) => {
    return (
        <div className="navbar">
            <div className="nav-container">
                <div className="left-navbar">
                    <span>{`<tdansjov/>`}</span>
                </div>
                <div className="right-navbar">
                    <div className="mobile-nav" onClick={() => openNav()}>
                        <div className="menu-btn">
                            <div className="menu-btn__burger"></div>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <a href="">Bio</a>
                        </li>
                        <li>
                            <a href="">Work</a>
                        </li>
                        <li>
                            <a href="">Side Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;