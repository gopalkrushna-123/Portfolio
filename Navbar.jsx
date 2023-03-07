import React from "react";
import Toggle from "../Toggle/Toggle";
import './Navbar.css';

import { Link } from "react-scroll";

const Navbar=()=>{

    return(
        <div className="nav-wrapper">
            <div className="nav-left">
                <div className="nav-name">Gopal</div>
                <Toggle />
            </div>
            <div className="nav-right">
                <div className="nav-list">
                    <ul>
                        <Link spy={true} to='Navbar' activeClass="activeClass">
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                            <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experence' smooth={true}>
                            <li>Experence</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true}>
                            <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Testimonial' smooth={true}>
                            <li>Testimonial</li>
                        </Link>
                    </ul>
                </div>
                <a href="tel:+918338835077"><button className="button nav-button">Contact</button></a>
            </div>
        </div>
    )
}

export default Navbar