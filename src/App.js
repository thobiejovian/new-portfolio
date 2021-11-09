import React, {useRef, useEffect} from "react";
import Header from "./Header/Header";
import LandingSection from "./LandingSection/LandingSection";
import BioSection from "./BioSection/BioSection";
import './App.scss';
import Navbar from "./Navbar/Navbar";
import WorkSection from "./WorkSection/WorkSection";
import SideProject from "./SideProject/SideProject";
import LastSection from "./LastSection/LastSection";


function App() {
  return (
    <div className="portfolio">
        <Header/>
        <Navbar/>
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
