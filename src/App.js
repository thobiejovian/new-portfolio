import React, {useRef, useEffect, useState} from "react";
import Header from "./Header/Header";
import LandingSection from "./LandingSection/LandingSection";
import BioSection from "./BioSection/BioSection";
import './App.scss';
import Navbar from "./Navbar/Navbar";
import WorkSection from "./WorkSection/WorkSection";
import SideProject from "./SideProject/SideProject";
import LastSection from "./LastSection/LastSection";
import SideNavbar from "./Navbar/SideNavbar/SideNavbar";


function App() {
    const [showSideBar, setShowSideBar] = useState(false);
    const [navClass, setNavClass] = useState("");

    const openSideBar = () => {
        setShowSideBar(true);
        setNavClass("isOpened");
        document.body.classList.add('lock-scroll');
    }

    const closeSideBar = () => {
        setNavClass("closed");
        setTimeout(() =>{
            setShowSideBar(false);
        }, 900)
        document.body.classList.remove('lock-scroll');
    }
  return (
    <div className="portfolio">
        <Navbar openSideBar={openSideBar}/>
        {
            showSideBar ? (
                <SideNavbar closeSideBar={closeSideBar} navClass={navClass}/>
            ) : ''
        }
        <div>
            <LandingSection/>
            <BioSection/>
            <WorkSection/>
            <SideProject/>
            <LastSection/>
        </div>
    </div>
  );
}

export default App;
