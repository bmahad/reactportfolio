import React from "react";
import './intro.css';
import Me from '../images/v1.png';
// import mouse from '../images/mouse.svg'

const Intro = () => {
    return(
        <>
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hi, My name is</h2>
                    <h1 className="i-name">Mahad Bukhari</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">React Native Designer</div>
                            <div className="i-title-item">UI/UX Desginer</div>
                            <div className="i-title-item">front end developer(UI)</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        i develop user interface services of all sizes,
                        speciallizing in creating stylish, modern websites,
                        and apps.
                    </div>
                </div>
               {/* <img src={mouse} alt="svg-image" className=""/> */}
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="image" className="i-img"/>
            </div>
        </div>
        </>
    )
}
export default Intro;