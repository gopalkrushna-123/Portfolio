import React from "react";
import './Testimonial.css';
import {Swiper,SwiperSlide} from 'swiper/react';
import Profile1 from '../../img/profile1.jpg';
import Profile2 from '../../img/profile2.jpg';
import Profile3 from '../../img/profile3.jpg';
import Profile4 from '../../img/profile4.jpg';
import {Pagination} from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonial=()=>{

    const clients=[
        {
            img:Profile1,
            review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exofficiis molestae qudo tempora laudintum, cumque error a niciplaceat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
            img:Profile2,
            review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exofficiis molestae qudo tempora laudintum, cumque error a niciplaceat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
            img:Profile3,
            review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exofficiis molestae qudo tempora laudintum, cumque error a niciplaceat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
            img:Profile4,
            review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exofficiis molestae qudo tempora laudintum, cumque error a niciplaceat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        }
        
    ]
    return(
        <div className="t-wrapper" id="Testimonial">
            <div className="t-heading">
                 <span>Client always get </span>
                 <span>Exceptional Work </span>
                 <span>from me...</span>
                 <div className="blur t-blur1" style={{background:"var(--purple"}}></div>
                 <div className="blur t-blur2" style={{background:"skyblue"}}></div>
            </div>
            {/* slider */}
            <Swiper modules={[Pagination]} slidesPerView={1} pagination={{clickable:true}}>
                {clients.map((client,index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}
export default Testimonial