import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'

const Services = () => {
  return (
    <div className="services">

        {/* {left side} */}
        <div className="awesome">
            <span>My Awwsome</span>
            <span>services</span>
            <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam animi 
                <br/>consequatur fugiat? Ut, neque repudiandae!
            </span>
            <button className='button s-button'>Download CV</button>
            <div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>
        </div>
        {/* {rigth side} */}
        <div className='cards'>
            <div style={{left: '14rem'}}>
                <Card emoji = {HeartEmoji}
                heading = {'Design'}
                details = {'Figma, Sketch, Photoshop, Adobe, Adobe xd'}
                />
            </div>
                {/* {second card} */}
            <div style={{left: '-4rem', top: '12rem'}}>
                <Card emoji = {Glasses}
                heading = {'Developer'}
                details = {'Html, Css, JavaScript, React'}
                />
            </div>   
                {/* {third card} */}
            <div style={{left: '12rem', top: '19rem'}}>
                <Card emoji = {Humble}
                heading = {'UI/UX'}
                details = {'lorem Ips kfnaklfn klamflknaklf'}
                />
            <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    </div>
  )
}

export default Services