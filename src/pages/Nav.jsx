import React, {useRef, useEffect, useState} from 'react';
import "./css/Nav.css"

import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

const Nav = (props) => {


    const [loader, setLoader] = useState(false)
    const [count, setCount] = useState(0)
    const loaderDiv = useRef()

    const loaderH1 = useRef()

    const welcomeText = useRef()
    useGSAP(() => {
        if (loader === true) {
            console.log("Animationstarts")
            const welcomeH1elems = welcomeText.current.querySelectorAll("h1")
            console.log(welcomeH1elems)
            let tl = gsap.timeline()
            tl.to(loaderH1.current, {
                // height: "0vh",
                // opacity: 0
                // background:"red"
                y:-200,
                delay:0.5,
                opacity:0

            })
            tl.to(welcomeH1elems.current,{
                opacity:1,
                stagger:0.5
            })
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
            }, "2ndAni")
            tl.to("#imageBox img", {
                scale: 1,
                ease: "expo.out",

            })
            tl.from("#heroBottom", {
                width: 0
            }, "2ndAni")
        }
    }, {scope: "#heroContainer",dependencies:[loader]})

    useEffect(() => {

        let si;
        if (count < 100) {
            si = setInterval(() => {
                setCount(prevState => prevState + 14)
            }, 100)
        }

        if (count > 100) {
            console.log("IT is true")
            setLoader(true)
        }
        return () => clearInterval(si)
    }, [count]);


    return (
        <>
            <div id="loaderDiv" ref={loaderDiv}>
                <div id="welcome">
                    <div id="load">
                        <h1 ref={loaderH1}>{count > 100 ? 100 : count}%</h1>

                    </div>
                    <div id="welcomeText" ref={welcomeText}>

                        <h1>Welcome</h1>
                        <h1>Hi, I am</h1>
                    </div>
                    <div id="myName">
                        <h1>Sourav</h1>

                    </div>

                </div>
            </div>
            <div id="navContainer">
                <nav>
                    <h1 id="navLogo">Sourav.</h1>
                    <h1><i class="ri-menu-3-line"></i></h1>
                </nav>
            </div>

            {props.children}
        </>
    );
};

export default Nav;