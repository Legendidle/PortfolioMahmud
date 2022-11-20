import React, { useContext } from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import { themeContext } from '../../Context'
import {motion} from 'framer-motion'

const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = {duration: 2, type: 'spring'}

  return (
    <div className="services">

        {/* {left side} */}
        <div className="awesome">
            <span style={{color: darkMode? 'white' : ""}}>My Awesome</span>
            <span>services</span>
            <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam animi 
                <br/>consequatur fugiat? Ut, neque repudiandae!
            </span>
            <div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>
        </div>
        {/* {rigth side} */}
        <div className='cards'>
            <motion.div 

            initial={{left: '35rem'}}
            whileInView={{left: '20rem'}}
            transition={transition}
            style={{left: '14rem'}}>
                <Card emoji = {HeartEmoji}
                heading = {'Design'}
                details = {'Figma, Sketch, Photoshop, Adobe'}
                />
            </motion.div>
                {/* {second card} */}
            <motion.div 
            initial={{left: '-10rem'}}
            whileInView={{left: '0rem'}}
            transition={transition}
            style={{left: '-4rem', top: '12rem'}}>
                <Card emoji = {Glasses}
                heading = {'Developer'}
                details = {'Html, Css, JavaScript, React'}
                />
            </motion.div>   
                {/* {third card} */}
            <motion.div 
            initial={{left: '35rem'}}
            whileInView={{left: '25rem'}}
            transition={transition}
            style={{left: '12rem', top: '19rem'}}>
                <Card emoji = {Humble}
                heading = {'UI/UX'}
                details = {'lorem Ips kfnaklfn klamflknaklf'}
                />
            <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>
            </motion.div>
        </div>
    </div>
  )
}

export default Services