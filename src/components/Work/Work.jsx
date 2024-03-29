import React from 'react'
import './Work.css'
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import {motion} from 'framer-motion'

const Work = () => {
    const transition = {duration: 3.5, type: 'spring'}

  return (
    <div className="works" id='Work'>
        <div className="awesome">
            <span>Works for All these</span>
            <span>Brands & Clients</span>
            <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam animi 
                <br/>
                consequatur fugiat? Ut, neque repudiandae!
                <br />
                consequatur fugiat? Ut, neque repudiandae!
                <br />
                consequatur fugiat? Ut, neque repudiandae!
            </span>
            <button className='button s-button'>Hire Me</button>
            <div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>
        </div>
        {/* {right side} */}
        <div className="w-right">
            <motion.div
            inherit={{rotate: 0}}
            whileInView={{rotate:45}} 
            transition={transition}
            className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="upwork" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="fiverr" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="amazon" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="shopify" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="facebook" />
                </div>
            </motion.div>
                {/* {backgroun circles} */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Work