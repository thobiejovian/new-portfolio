import React, {useState, useEffect} from 'react';
import {debounce} from "../scrollHelper";
import "./Navbar.scss"

const Navbar = ({openSideBar}) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;

        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

        setPrevScrollPos(currentScrollPos);
    }, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll]);
    return (
        <div className="navbar" style={{top: visible ? '0' : '-80px'}}>
            <div className="nav-container">
                <div className="left-navbar">
                    <span>{`<tdansjov/>`}</span>
                </div>
                <div className="right-navbar">
                    <div className="mobile-nav" onClick={() => openSideBar()}>
                        <div className="menu-btn">
                            <div className="menu-btn__burger"></div>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <a href="#bio">Bio</a>
                        </li>
                        <li>
                            <a href="#work">Work</a>
                        </li>
                        <li>
                            <a href="#side-projects">Side Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;