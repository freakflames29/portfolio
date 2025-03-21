import React from 'react';
import "./css/Hero.css"
import COMPUTER from "../assets/images/images/computer.png"

import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

const Hero = () => {

    useGSAP(() => {
        let tl = gsap.timeline()
        tl.from("#heroTop h1", {
            y: 300,
            delay: 0.5
        }, "heroH1")
        tl.from("#middleLeft h1", {
            y: 300,
            delay: 0.5
        }, "heroH1")


        tl.from("#imageBox", {
            width: 0
        },"2ndAni")
        tl.to("#imageBox img", {
            scale: 1,
            ease: "expo.out",

        })
        tl.from("#heroBottom",{
            width:0
        },"2ndAni")

    }, {scope: "#heroContainer"})


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