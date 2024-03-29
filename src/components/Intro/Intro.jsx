import React, { useContext } from 'react'
import './Intro.css'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesemoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import {motion} from 'framer-motion'
import { Link } from 'react-scroll'

const Intro = () => {
    const transition = {duration: 2, type:'spring'}
    const theme = useContext(themeContext);
    const darkMode =theme.state.darkMode;
  return (
    <div className="intro" id='I`ntro'>
        <div className="i-left">
            <div className="i-name">
                <span style = {{color: darkMode? 'white' : ""}}>Hi! I am Ma'ruf</span>
                <span>Ma'ruf Nazarov</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vero, fugit aliquam eveniet impedit sint provident iste voluptatem nisi esse temporibus cumque ad quisquam ipsa laborum magni minus natus sit.</span>
            </div>
            <button className='button i-button'>
                <Link spy={true} to='Contacts' smooth={true}>Hire me</Link>
            </button>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="vector" />
            <img src={Vector2} alt="vector" />
            <img src={boy} alt="boy" />
            <motion.img 
            initial={{left: '-36%'}}
            whileInView={{left: '-24%'}}
            transition={transition}
            src={glassesemoji} alt="glassesemoji" />

            <motion.div 
            initial={{left: '74%', top: '-4%'}}
            whileInView={{left: '68%'}}
            transition={transition}
            style={{top: '18rem', left: '9rem'}}
            className="floaring-div"
            >
                <FloatingDiv image={Crown} txt1='Web' txt2='developer'/>
            </motion.div>
             <motion.div 
            initial={{left: '-36%'}}
            whileInView={{left: '0rem'}}
            transition={transition}
            style={{top: '18rem', left: '0rem'}}
            className="floaring-div"
            >
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
            </motion.div>
        {/* {blur divs} */}
        <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
        <div className='blur' style={{background: '#c1f5ff', top: '17rem', width:'21rem', height:'11rem', left: '-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro