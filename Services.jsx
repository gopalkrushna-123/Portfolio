import React from "react";
import Card from "../Card/Card";
import './Services.css';
import Heart from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';

import { motion } from "framer-motion";
//import Resume from '../Services/Gopal resume 1.docx';

const Services =()=>{

    const transition={duration: 1,type: 'spring'};
    return(
        <div className="services" id="Services">
            {/* left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span>
                    Lorem ispum is simpley dummy text of printing of printing Lorem.<br />
                    ispum is simply dummy text of printing
                </span>
                <a href="./Gopal-resume.docx" target="_block" download className="button s-button" style={{textDecoration:'none',alignItems:'center',width:'5rem',height:'1.5rem'}}>Download CV</a>
                <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
            </div>

            {/* right side */}
            <div className="cards">
                <motion.div whileInView={{left:'25rem'}} initial={{left:'14rem'}} transition={transition} style={{left:'14rem'}}>  {/* first card */}
                <Card 
                    emoji={Heart}
                    heading={'Design'}
                    detail={"Figma,Sketch,Adobe,Photoshop"}
                />
                </motion.div>

                <motion.div whileInView={{left:'3rem'}} initial={{left:'10rem'}} transition={transition} style={{top:'14rem',left:'-4rem'}}>                       {/* second card */}
                <Card 
                    emoji={Glasses}
                    heading={'Developer'}
                    detail={"Html,Css,Javascript,React"}
                />
                </motion.div>

                <motion.div whileInView={{left:'20rem'}} initial={{left:'5rem',top:'20rem'}} transition={transition} style={{top:'19rem',left:'12rem'}}>                       {/* third card */}
                <Card 
                    emoji={Humble}
                    heading={'UI/UX'}
                    detail={"Dummy text are use in section where we need some random text"}
                />
                </motion.div>
                <div className="blur s-blur2" style={{background:"var(--purple)"}}>
                     
                </div>
            </div>
        </div>
    )
}

export default Services