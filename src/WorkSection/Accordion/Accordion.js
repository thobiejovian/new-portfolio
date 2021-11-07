import React, {useState, useRef} from 'react';
import CloseIcon from "./CloseIcon/CloseIcon";
import "./Accordion.scss";

const Accordion = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion-icon");

    const content = useRef(null);
    const toggleAccordion = () =>{
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px": `${content.current.scrollHeight}px`);
        setRotateState(setActive === "active" ? "accordion-icon" : "accordion-icon rotate");
    }
    return (
        <div className="accordion-section">
            <span className={`accordion ${setActive}`} onClick={toggleAccordion}>
               <span className="accordion-title">{props.title}</span>
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
                    <div
                        className="accordion-text work-right-content"
                        dangerouslySetInnerHTML={{__html: props.content}}
                    />
                </div>
            </div>
        </div>
    );
};

export default Accordion;