import React, {useState} from 'react';
import {SliderData} from "./SliderData";
import Left from "../../img/left.svg";
import Right from "../../img/right.svg";
import Github from "../../img/github.svg";
import "./Content.scss";

const Content = ({slides}) => {
        const [current, setCurrent] = useState(0);
        const length = slides.length;

        const nextSlide = () => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        };

        const prevSlide = () => {
            setCurrent(current === 0 ? length - 1 : current - 1);
        };

        if (!Array.isArray(slides) || slides.length <= 0) {
            return null;
        }
    return (
        <div>
            <img src={Left} alt="profile" className="left" width={30} height={30} onClick={prevSlide}/>
            <img src={Right} alt="profile" className="right" width={30} height={30} onClick={nextSlide}/>
            {SliderData.map((slide, index) => {
                return (
                    <div className={`slide ${index === current ? 'active' : ''}`} key={index}>
                        {index === current && (
                        <div className="content-row">
                            <span className="side-headline">{slide.sideHeadline}</span>
                            <p className="side-text">{slide.sideText}</p>
                            <div className="side-tech-wrapper">
                                {slide.sideContent.map((content, index) => {
                                    return (
                                        <span>{content}</span>
                                    );
                                })}
                            </div>
                            <div className="side-details">
                                <a href={slide.sideLink} className="side-details-link">
                                    <img src={Github} alt="profile" className="icon" width={23} height={23}/>
                                    <span>See on GitHub</span>
                                </a>
                            </div>
                            <div className="bottom-content">
                                <div className="video-wrap" dangerouslySetInnerHTML={{ __html: `
                                    <video
                                      loop
                                      muted
                                      autoplay
                                      playsinline
                                      src="${slide.sideVideo}"
                                    />,
                                  ` }}></div>
                            </div>
                        </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Content;