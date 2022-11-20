import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'

function NavBar() {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
            <div className="n-name">Ma'ruf</div>
            <Toggle />
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Contacts</li>
                </ul>
            </div>
            <button className='button n-button'>
                Contact
            </button>
        </div>
    </div>
  )
}

export default NavBar