import React, { useRef, useEffect, useState } from "react";
import "./SideNavbar.scss";


const SideNavbar = ({closeSideBar, navClass}) => {
    return (
            <div className={`sidenav ${navClass}`}>
                <div className="links">
                    <div className={`menu-btn ${closeSideBar ? "close" : ""}`}>
                        <div className="menu-btn__burger" onClick={()=>closeSideBar()}></div>
                    </div>
                    <a className="link" href="#main" onClick={()=>closeSideBar()}>Back To Top Please!</a>
                    <a className="link" href="#bio" onClick={()=>closeSideBar()}>Bio</a>
                    <a className="link" href="#work" onClick={()=>closeSideBar()}>Work Experience</a>
                    <a className="link" href="#side-projects" onClick={()=>closeSideBar()}>Side Projects</a>
                </div>
            </div>
    );
};

export default SideNavbar;