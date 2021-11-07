import Header from "./Header/Header";
import LandingSection from "./LandingSection/LandingSection";
import BioSection from "./BioSection/BioSection";
import './App.css';
import Navbar from "./Navbar/Navbar";
import WorkSection from "./WorkSection/WorkSection";


function App() {
  return (
    <div className="">
        <Header/>
        <Navbar/>
        <div>
            <LandingSection></LandingSection>
            <BioSection/>
            <WorkSection/>
        </div>
    </div>
  );
}

export default App;
