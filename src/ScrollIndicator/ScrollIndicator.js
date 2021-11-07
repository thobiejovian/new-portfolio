import React from 'react';
import "./ScrollIndicator.scss";

const ScrollIndicator = (props) => {
    return (
        <div>
            <a href="" className="scroll-down">
                <span className="indicator-name">{props.name}</span>
                <div className="mouse">
                    <span style={{backgroundColor: props.style}}>
                    </span>
                </div>
                <div className="arrow">
                    <span></span>
                </div>
            </a>
        </div>
    );
};

export default ScrollIndicator;