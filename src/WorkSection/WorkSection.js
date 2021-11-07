import React from 'react';
import Accordion from "./Accordion/Accordion";
import "./WorkSection.scss";

const WorkSection = () => {
    return (
        <div className="work-section">
            <div className="work-container">
               <span className="work-heading">
                   Work Experience
               </span>
               <Accordion
                   title="eBay Deine Stadt"
                   timeHeading="When"
                   roleHeading="Role"
                   websiteHeading="Website"
                   techHeading="Tech"
                   timeText="2021"
                   roleText="Frontend Developer"
                   websiteText='<a href="https://www.ebay-deine-stadt.de/">eBay Deine Stadt</a>'
                   techText="React, Redux, Hooks, CakePHP"
                   content="gila keren banget lu bro"/>
                <Accordion title="Ebay Deine Stadt" content="gila keren banget lu bro"/>
                <Accordion title="Ebay Deine Stadt" content="gila keren banget lu bro <span>gila keren banget lu bro</span><br><br/><span>gila keren banget lu bro</span><br><br/><span>gila keren banget lu bro</span><br><br/>"/>
            </div>
        </div>
    );
};

export default WorkSection;