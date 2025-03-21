import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from "./pages/Hero.jsx";
import Nav from "./pages/Nav.jsx";

function App() {


    return (<>
            <Nav>
                <Hero/>
            </Nav>
        </>)
}

export default App
