import React from "react";
import Wrapper from "./Wrapper";

const Navbar = () => {
        return (
            <div>
                <nav id="lognav" className="navbar fixed-top navbar-dark bg-dark">
                <Wrapper>
                    <a className="navbar-brand" href="/">
                        <img src="/techLogo.jpg" width="30" height="30" className="d-inline-block align-top" alt="logo" style={{borderRadius: 7}}/> TechBook</a>
                </Wrapper>
                </nav>
            </div>
        );
    }

export default Navbar;