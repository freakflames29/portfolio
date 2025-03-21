import React, {useRef} from 'react';
import "./css/Hero.css"
import COMPUTER from "../assets/images/images/computer.png"

import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

const Hero = () => {
    const mouseRef = useRef()

  const mouseMoving = (e) => {
        console.log(e)
        let mouseElement = mouseRef.current
        const mouseWidth = mouseElement.offsetWidth;
        const mouseHeight = mouseElement.offsetHeight;
        gsap.to("#mouse", {
            x: e.pageX - mouseWidth,
            y: e.pageY - mouseHeight,
            ease: "power2.out"
        })

    }
    return (
        <>

            <div id="mouse" ref={mouseRef}></div>
            <div id={"heroContainer"} onMouseMove={mouseMoving}>
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
        </>
    );
};

export default Hero;