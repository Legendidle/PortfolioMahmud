import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesemoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hi! I am Ma'ruf</span>
                <span>Ma'ruf Nazarov</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vero, fugit aliquam eveniet impedit sint provident iste voluptatem nisi esse temporibus cumque ad quisquam ipsa laborum magni minus natus sit.</span>
            </div>
            <button className='button i-button'>Hire me</button>
            <div className="i-icons">
                <img src={Github} alt="Github" />
                <img src={LinkedIn} alt="Github" />
                <img src={Instagram} alt="Github" />
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="vector" />
            <img src={Vector2} alt="vector" />
            <img src={boy} alt="boy" />
            <img src={glassesemoji} alt="glassesemoji" />

            <div style={{top: '-4%', left: '68%'}}>
                <FloatingDiv image={Crown} txt1='Web' txt2='developer'/>
            </div>
            <div style={{top: '18rem', left: '0rem'}}>
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
            </div>
        {/* {blur divs} */}
        <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
        <div className='blur' style={{background: '#c1f5ff', top: '17rem', width:'21rem', height:'11rem', left: '-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro