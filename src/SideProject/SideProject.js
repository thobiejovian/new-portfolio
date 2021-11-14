import React from 'react';
import Content from "./Content/Content";
import {SliderData} from "./Content/SliderData";
import "./SideProject.scss";
const SideProject = () => {
    return (
        <div className="side-project" id="side-projects">
            <div className="container-side-project">
                <span className="side-project-headline">Side Projects</span>
                <Content slides={SliderData}/>
            </div>
        </div>
    );
};

export default SideProject;