import React from "react";
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import im from '../../img/gopal.png';
import Crown from '../../img/crown.png';
import Glasses from '../../img/glassesimoji.png';
import Thumb from '../../img/thumbup.png';
import Floting from "../Floting/Floting";

import { motion } from "framer-motion";

//import styled from 'styled-components';


const Intro = () =>{
    const transtion = {duration:2,type:'spring'}
    
    return(
        <div className="intro">
            <div className="intro-left">
                <div className="intro-name">
                    <span className="first-child">Hye! I Am</span>
                    <span className="second-child">Gopal Krushna</span>
                    <span className="third-child">Frontend Developer with high 
                        level of experience in web 
                        designing and development, producting the
                         Quality work.</span>
                </div>
                <button className="button intro-button">Hire me</button>
                <div className="intro-icon">
                    <img src={Github} />
                    <img src={LinkedIn} />
                    <img src={Instagram} />
                </div>
            </div>
            <div className="intro-right">
               <img className="first-child" src={Vector1} />
               <img className="second-child" src={Vector2} />
               <img className="third-child" src={im} />
               <motion.img initial={{left:'-36%'}} whileInView={{left:'-24%'}} transition={transtion} className="forth-child" src={Glasses} />
               <motion.div initial={{top:'-4%',left:'74%'}} whileInView={{left:'68%'}} transition={transtion} style={{top:"-4%",left:"68%"}} className="floting-div">
                    <Floting image={Crown}  />
               </motion.div>
               <motion.div initial={{left:'9rem',top:'18rem'}} whileInView={{left:'0rem'}} transition={transtion} style={{top:'18rem',left:'0rem'}} className="floting-div">
                <Floting image={Thumb} />
               </motion.div>
               {/*Blur divs */}

               <div className="blur" style={{background:"rgb(238 210 255)"}}>
                    
               </div>
               <div className="blur" style={{
                background:'#C1F5FF',
                top:'17rem',
                width:'21rem',
                height:'11rem',
                left:'-9rem'
               }}>

               </div>
            </div>
        </div>
    )
}

export default Intro