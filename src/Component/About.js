import React from "react";
import sme from '../images/g1.jfif';

const About = () => {
    return(
        <>
        <div className="a-about mt-2">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={sme} alt="image" className="a-img"/>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-desc pt-lg-2">
                   I am an enterprising young professional software engineer, Front End Developer(UI) . In terms of results and objectives, I am enthusiastic and I work with decisiveness and conviction. I have a proactive attitude and find positive ways to stimulate and engage with people.I create website in HTML5 | CSS3 | BOOTSTRAP5 | JAVASCRIPT | SASS | React-Js | and Create UI design in cross-platfrom for ios & android on React Native. and create mobile app design and web design , in this new modern era like Adobe XD , Figma ( MOCK UPS , PROTOTYPING , WIREFRAMES ).
                </p>
            </div>
        </div>
        </>
    )
}
export default About;