import React, { useContext } from 'react'
import { themeContext } from '../../Context';
import './Experience.css'   

const Experience = () => {
  const theme = useContext(themeContext);
    const darkMode =theme.state.darkMode;

  return (
    <div className="experience">
        <div className='achievement'>
            <div style={{color: darkMode? 'black' : ""}} className='circle'>8+</div>
            <span>years</span>
            <span>Experience</span>
        </div>
        <div className='achievement'>
            <div style={{color: darkMode? 'black' : ""}} className='circle'>20+</div>
            <span>completed</span>
            <span>Projects</span>
        </div>
        <div className='achievement'>
            <div style={{color: darkMode? 'black' : ""}} className='circle'>5+</div>
            <span>components</span>
            <span>work</span>
        </div> 
    </div>
  )
}

export default Experience