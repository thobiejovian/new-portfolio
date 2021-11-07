import React, {useRef, useEffect} from "react";
import {TweenMax} from 'gsap';
import Header from "./Header/Header";
import LandingSection from "./LandingSection/LandingSection";
import BioSection from "./BioSection/BioSection";
import './App.scss';
import Navbar from "./Navbar/Navbar";
import WorkSection from "./WorkSection/WorkSection";


function App() {
  return (
    <div className="portfolio">
        <Header/>
        <Navbar/>
        <div>
            <LandingSection/>
            <BioSection/>
            <WorkSection/>
        </div>
    </div>
  );
}

export default App;
