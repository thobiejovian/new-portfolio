import React, { useRef, useEffect } from "react";
import "./SideNavbar.scss";


const SideNavbar = ({closeNav, showNavbar}) => {
    return (
            <div className="sidenav">
                <div className="links">
                    <div className={`menu-btn ${showNavbar ? "close" : ""}`}>
                        <div className="menu-btn__burger" onClick={()=>closeNav()}></div>
                    </div>
                    <a className="link" href="#main" onClick={()=>closeNav()}>Back To Top Please!</a>
                    <a className="link" href="#skill" onClick={()=>closeNav()}>Bio</a>
                    <a className="link" href="/">Work Experience</a>
                    <a className="link" href="/">Side Projects</a>
                </div>
            </div>
    );
};

export default SideNavbar;