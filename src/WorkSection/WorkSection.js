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
                   slug="Deine Stadt"
                   subTitle="(I-Ways)"
                   timeHeading="When"
                   roleHeading="Role"
                   websiteHeading="Website"
                   techHeading="Tech"
                   timeText="2021"
                   roleText="Frontend Developer"
                   websiteText='<a href="https://www.ebay-deine-stadt.de/">eBay Deine Stadt</a>'
                   techText="React, Redux, Hooks, CakePHP"
                   highlightText="Highlights"
                   content=
                       "<ul>
                            <li>Created and implemented wishlist function, products filter and couple Pages with Redux and Hooks.</li>
                            <li>Successfully created an E-Commerce Website for eBay within one month</li>
                            <li>Collaborated with backend developers regarding accessing the data for Frontend developers to consume.</li>
                            <li>Unit Testing with Jest</li>
                        </ul>
                        <p>After working in TEF Project for couple of months, I was assigned in an interesting project where we have to finish creating a fully working E-commerce Website within one Month.</p>
                        <p>The first weeks were exciting because I got to learn new stuff such as how  React and CakePHP work together and experienced the benefits of combining both Frameworks. In the end, after successfully implemented wishlist function, product filter and couple pages we were able to fullfilled our client needs and they also satisfied with the results.</p>
                        "/>
                <Accordion
                    title="eBay Listing Tool"
                    slug="Listing Tool"
                    subTitle="(I-Ways)"
                    timeHeading="When"
                    roleHeading="Role"
                    websiteHeading="Website"
                    techHeading="Tech"
                    timeText="2021"
                    roleText="Frontend Developer"
                    websiteText='<span>Coming Soon!</span>'
                    techText="React, Redux, Hooks, CakePHP, REST APIs"
                    highlightText="Highlights"
                    content=
                        "<ul>
                            <li>Created and implemented forget password (page and function) with Redux, Styled Components and Material UI</li>
                            <li>Unit Testing with Jest</li>
                            <li>Collaborated with talented backend developers and web/product designers</li>
                        </ul>
                        <p>Another interesting project that introduced me to the whole new perspective is where I was assigned to eBay Listing Tool project. I was assigned to this project where its already started for couple of months.</p>
                        <p>In terms of tools we used Material UI and also Styled Components and in this projects we collecting the data from REST APIs, because of that in the first couple of weeks was interesting and also challenging for me because I learned the benefits and also the weakness of it.</p>
                        <p>The Redux structure that we used in this project is also kind of unique than what developers do. In summary, after successfully helped the team to implemented the whole “forget password” page and also the function, I am so glad that I was assigned to this project because I have to step out of my comfort zone.</p>
                        "/>
                <Accordion
                    title="eBay TEF"
                    slug="TEF"
                    subTitle="(I-Ways)"
                    timeHeading="When"
                    roleHeading="Role"
                    websiteHeading="Website"
                    techHeading="Tech"
                    timeText="2020"
                    roleText="Intern Frontend Developer"
                    websiteText='<span>Ask me for more details :D</span>'
                    techText="React, Redux, Hooks, Styled Components"
                    highlightText="Highlights"
                    content=
                        "<ul>
                            <li>Started building apps with JavaScript, React and Redux</li>
                            <li>Unit Testing with Jest</li>
                            <li>Implemented first widget</li>
                            <li>Teams showed me how to use Git properly</li>
                            <li>Worked remotely and communicated through Microsoft Teams</li>
                        </ul>
                        <p>I-ways offered me my first real job in the industry as a Frontend Developer and it wasn't quite what I had imagined. I-Ways taught me a lot, not only programming skills but also soft skills e.g how to communicate between co-worker and how to handle a feedback from co-worker and customer.</p>
                        <p>Tailored E-Commerce Feed (TEF) and TEF-widget was my first real taste of being a frontend developer on a team with backend engineers, product designers and project manager.</p>
                        "/>
                <Accordion
                    title="BCG Newsletter"
                    subTitle="(Freelance)"
                    slug="BCG"
                    timeHeading="When"
                    roleHeading="Role"
                    websiteHeading="Website"
                    techHeading="Tech"
                    timeText="2020"
                    roleText="Freelancer"
                    websiteText='<a href="https://www.bcg.com/de-de/">Boston Consulting Group</a>'
                    techText="HTML,CSS,Javascript"
                    highlightText="Highlights"
                    content=
                        "<ul>
                            <li>Analyzing and fixed responsive design bugs in the Newsletter code</li>
                            <li>Successfully fixed the client needs within a day. </li>
                        </ul>
                        <p>My first work as a freelancer, they asked me to analyse their newsletter code because it looks kinda odd in mobile email platform. </p>
                        "/>
            </div>
        </div>
    );
};

export default WorkSection;