import React from 'react';
import Content from "./Content/Content";
import "./SideProject.scss";
import EasyJob from "../img/easyjob.mp4";
import Lizzie from "../img/lizzie.mp4";
import EHD from "../img/EHD.mp4";
const SideProject = () => {
    return (
        <div className="side-project">
            <div className="container-side-project">
                <span className="side-project-headline">Side Projects</span>
                <Content
                    sideHeadline="Easy Job"
                    sideText="My first Fullstack jobportal website for University project"
                    sideContent="
                    <span>Vue</span>
                    <span>Laravel</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    "
                    sideVideo= {EasyJob}
                    leftSide={true}
                />
                <Content
                    sideHeadline="Lizzie"
                    sideText="Static band portfolio website that i made for my friend during my free time."
                    sideContent="
                    <span>Javascript</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    "
                    sideVideo= {Lizzie}
                    leftSide={false}
                />
                <Content
                    sideHeadline="Easy Healthy Delivery"
                    sideText="Static delivery company website that i made for businessplan university project"
                    sideContent="
                    <span>Javascript</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    "
                    sideVideo= {EHD}
                    leftSide={true}
                />
            </div>
        </div>
    );
};

export default SideProject;