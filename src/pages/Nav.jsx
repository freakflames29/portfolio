import React from 'react';
import "./css/Nav.css"

const Nav = (props) => {
    return (
        <>
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