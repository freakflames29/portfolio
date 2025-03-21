import React from 'react';
import "./css/Hero.css"
import COMPUTER from "../assets/images/images/computer.png"
const Hero = () => {
    return (
        <div id={"heroContainer"}>
            <div id="heroTop">
                <h1>I turn <span id={"textCircuit"}>Tech</span></h1>
            </div>
            <div id="heroMiddle">
                <div id="middleLeft">
                    <h1>Into ART</h1>
                </div>
                <div id="middleRight">
                    <div id="imageBox">
                        <img src={COMPUTER} alt="comp"/>
                    </div>
                </div>
            </div>
            <div id="heroBottom"></div>
        </div>
    );
};

export default Hero;