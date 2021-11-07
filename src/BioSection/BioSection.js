import React from 'react';
import "./BioSection.scss";
import illustration from "../img/illuslanding.png";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";

const BioSection = () => {
    return (
        <div className="bio-section">
            <span className="bio-heading">I'm Thobie, a Frontend Developer and a Warzone TryHard currently living in Germany. I’ve worked at medium sized agencies as a working student and as a problem solver, i specialize in merging both design, content and code together to provide easy-to-use, unique and beautiful responsive websites that serve to connect people and ideas.</span>
            <span className="bio-heading">Outside of the internet, you can find me at the gym or in Verdansk.</span>
            <span className="bio-heading">Interested in working together?</span>

            <div className="get-in-touch">
                <a href="mailto:jovian.thobie@gmail.com">Get in touch!</a>
                <img src={illustration} alt="Illustration"/>
            </div>
        </div>
    );
};

export default BioSection;