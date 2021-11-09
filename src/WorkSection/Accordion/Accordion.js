import React, {useState, useRef} from 'react';
import {gsap} from "gsap";
import CloseIcon from "./CloseIcon/CloseIcon";
import BCG from "../../img/bcg.png";
import DeineStadt from "../../img/deinestadt.png";
import TEF from "../../img/tef.png";
import ListingTool from "../../img/listingtool.png"
import "./Accordion.scss";


const background = [
    {name: "BCG", image: BCG},
    {name: "Listing Tool", image: ListingTool},
    {name: "TEF", image: TEF},
    {name: "Deine Stadt", image: DeineStadt}
]
const Accordion = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion-icon");
    const [setBackground, setBackgroundState] = useState("");

    const content = useRef(null);
    let accordionBackground = useRef(null);
    const toggleAccordion = () =>{
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px": `${content.current.scrollHeight}px`);
        setRotateState(setActive === "active" ? "accordion-icon" : "accordion-icon rotate");
        setBackgroundState(setActive === "active" ? "display-none" : "");
    }
    const handleBackground = background => {
        gsap.to(accordionBackground, {
            duration: 0.4,
            opacity: 1,
            ease: "power3.inOut"
        });
        gsap.from(accordionBackground, {
            duration: 0.4,
            transformOrigin: "right top"
        });
    };
    const handleBackgroundReturn = () => {
        gsap.to(accordionBackground, {
            duration: 0.4,
            opacity: 0,
        });
    };
    return (
        <div className="accordion-section">
            {background.map(el => (
                props.slug === el.name
                    ?
                    <img style={{visibility: setActive ? "hidden" : ""}} key={el.name} src={el.image} ref={el => (accordionBackground = el)}/>
                    :
                    ""
                ))}
            <span className={`accordion ${setActive}`} onMouseEnter={() => handleBackground(background.image)} onMouseLeave={handleBackgroundReturn} onClick={toggleAccordion}>
               <span className="accordion-title">{props.title} <span className="accordion-sub-title">{props.subTitle}</span></span>
                <CloseIcon className={`${setRotate}`} width={20} fill={"#777"}/>
            </span>
            <div ref={content} style={{maxHeight: `${setHeight}`}}className="accordion-content">
                <div className="accordion-row">
                    <div className="work-left-content">
                        <div className="details">
                            <div className="details-content">
                                <span className="left-content-heading">{props.timeHeading}</span>
                                <span className="left-content-text">{props.timeText}</span>
                            </div>
                            <div className="details-content">
                                <span className="left-content-heading">{props.roleHeading}</span>
                                <span className="left-content-text">{props.roleText}</span>
                            </div>
                        </div>
                        <div className="details">
                            <div className="details-content">
                                <span className="left-content-heading">{props.websiteHeading}</span>
                                <span className="left-content-text" dangerouslySetInnerHTML={{__html: props.websiteText}}/>
                            </div>
                            <div className="details-content">
                                <span className="left-content-heading">{props.techHeading}</span>
                                <span className="left-content-text">{props.techText}</span>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-highlight work-right-content">
                        <span>{props.highlightText}</span>
                        <div
                            className="accordion-text"
                            dangerouslySetInnerHTML={{__html: props.content}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;