import React from "react";
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import Hoc from '../../img/hoc.png';
import Musicapp from '../../img/musicapp.png';
import 'swiper/css';

 
const Portfolio=()=>{
    return(
        <div className="portfolio" id="Portfolio">
            {/* heading */}
            <span>Recent Project</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className="portfolio-slider">
                <SwiperSlide>
                    <img src={Sidebar} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Musicapp} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Hoc} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Portfolio