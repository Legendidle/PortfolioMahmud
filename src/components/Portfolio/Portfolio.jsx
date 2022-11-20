import React, { useContext } from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import SideBar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import HOC from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"
import "swiper/css"
import { themeContext } from '../../Context'


const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode =theme.state.darkMode;

  return (
    <div className='portfolio' id='Portfolio'>

        <span style = {{color: darkMode? 'white' : ""}}>Recent Projects</span>
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