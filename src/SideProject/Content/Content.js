import React from 'react';
import Github from "../../img/github.svg";
import "./Content.scss";

const Content = (props) => {
    return (
        <div>
        {props.leftSide ?
                <div className="side-project-content">
                    <div className="details-side-project-wrapper">
                        <span className="side-headline">{props.sideHeadline}</span>
                        <p className="side-text">{props.sideText}</p>
                        <div className="side-tech" dangerouslySetInnerHTML={{__html: props.sideContent}}/>
                        <div className="side-details">
                            <a href="" className="side-details-link">
                                <img src={Github} alt="profile" className="icon" width={23} height={23}/>
                                <span>See on GitHub</span>
                            </a>
                        </div>
                    </div>
                    <div className="right-side-project">
                        <div className="video-wrap">
                            <video muted autoPlay loop>
                                <source src={props.sideVideo} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
                :
                <div className="side-project-content">
                    <div className="left-side-project-video">
                        <div className="video-wrap">
                            <video muted autoPlay loop>
                                <source src={props.sideVideo} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                    <div className="details-side-project-wrapper">
                        <span className="side-headline">{props.sideHeadline}</span>
                        <p className="side-text">{props.sideText}</p>
                        <div className="side-tech" dangerouslySetInnerHTML={{__html: props.sideContent}}/>
                        <div className="side-details">
                            <a href="" className="side-details-link">
                                <img src={Github} alt="profile" className="icon" width={23} height={23}/>
                                <span>See on GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
        }
        </div>
    );
};

export default Content;