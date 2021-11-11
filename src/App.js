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
    const [showNavbar, setShowNavbar] = useState(false);

    const openNav = () => {
        setShowNavbar(true);
        document.body.classList.add('lock-scroll');
    }

    const closeNav = () => {
        setShowNavbar(false);
        document.body.classList.remove('lock-scroll');
    }
  return (
    <div className="portfolio">
        <Navbar openNav={openNav}/>
        {
            showNavbar ? (
                <SideNavbar closeNav={closeNav} showNavbar/>
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
