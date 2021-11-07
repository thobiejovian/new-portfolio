import React from 'react';
import Profile from "../img/landing2.jpg";
import './LandingSection.css'
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";

const LandingSection = () => {
    return (
        <div className="landing-section">
            <div className="container">
                <div className="left-content">
                    <span className="work-title">Frontend Developer + Cat Enthusiast</span>
                    <span className="name-title">Thobie Jovian</span>
                </div>
                <div className="right-content">
                    <img src={Profile} alt="profile" className="profile-img"/>
                </div>
            </div>
            <ScrollIndicator name="Thobie's Bio" style="#ffffff"/>
        </div>
    );
};

export default LandingSection;