import React from "react";
import './Works.css';
import Amazon from '../../img/amazon.png';
import Upwork from '../../img/Upwork.png';
import Fiber from '../../img/fiverr.png';
import Shoplify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';

import { motion } from "framer-motion";

const Works=()=>{

    return(
        <div className="works">
            {/*left side */}
            <div className="awesome">
                <span>Works for All these</span>
                <span>Brands & Clients</span>
                <span>
                    Lorem ispum is simpley dummy text of printing of printing Lorem.<br />
                    ispum is simply dummy text of printing
                    <br />
                    ispum is simply dummy text of printing text of printing
                    <br />
                    Lorem ispum is simpley dummy text
                </span>
                <button className="button s-button">Download CV</button>
                <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
            </div>
            {/* right side*/}
            <div className="w-right">
                <motion.div initial={{rotate: 45}} whileInView={{rotate: 0}} viewport={{margin: '-40px'}} transition={{duration:3.5, type:'spring'}} className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiber} />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shoplify} />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} />
                    </div>
                </motion.div>
                {/*background circle */}
                <div className="w-backCircle blue-circle"></div>
                <div className="w-backCircle yellow-circle"></div>
            </div>
        </div>
    )
}
export default Works