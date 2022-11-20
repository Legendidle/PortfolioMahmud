import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import SideBar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import HOC from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"
import "swiper/css"


const Portfolio = () => {
  return (
    <div className='portfolio'>

        <span>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={SideBar} alt="sidebar" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="ecommerce" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="musicapp" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="hoc" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio