import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll'

function NavBar() {
  return (
    <div className='n-wrapper' id='NavBar'>
        <div className="n-left">
            <div className="n-name">Ma'ruf</div>
            <Toggle />
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>
                        <Link spy={true} to='NavBar' smooth={true} activeClass='activeClass'>Home</Link>
                    </li>
                    <li>
                        <Link spy={true} to='Services' smooth={true}>Services</Link>
                    </li>
                    <li>
                        <Link spy={true} to='Portfolio' smooth={true}>Portfolio</Link>
                    </li>
                    <li>
                        <Link spy={true} to='Experience' smooth={true}>Experience</Link>
                    </li>
                    <li>
                        <Link spy={true} to='Testimonials' smooth={true}>Testimonials</Link>
                    </li>
                </ul>
            </div>
            <button className='button n-button'>
                <Link spy={true} to='Contacts' smooth={true}>Contact</Link>
            </button>
        </div>
    </div>
  )
}

export default NavBar