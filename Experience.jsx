import React from "react";
import './Experience.css';


import { themeContext } from "../../Context";
import { useContext } from "react";


const Experience=()=>{

    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;

    return(
        <div className="experience" id="Experence">
            <div className="achievment">
                <div className="circle">8+</div>
                <span>years</span>
                <span>experience</span>
            </div>

            <div className="achievment">
                <div className="circle">20+</div>
                <span>completed</span>
                <span>projects</span>
            </div>

            <div className="achievment">
                <div className="circle">5+</div>
                <span>companies</span>
                <span>work</span>
            </div>
        </div>
    )
}
export default Experience