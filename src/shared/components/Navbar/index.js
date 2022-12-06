import React from 'react'
import logo from '../../../assets/images/logo.png'
import './style.scss'

export default function Navbar () {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-logo'>
                <img src={logo} alt='logo' title='Company logo here' />
            </div>
            <div className='navbar-links'>
                <ul>
                    <li><a href='#hero' title='Home | Company Name'>Home</a></li>
                    <li><a href='#services' title='Service | Company Name'>Service</a></li>
                    <li><a href='#' title='About | Company Name'>About</a></li>
                    <li><a href='#' title='Pages | Company Name'>Pages</a></li>
                    <li><a href='#' title='Blocks | Company Name'>Blocks</a></li>
                    <li><a href='#' title='Contact | Company Name'>Contact</a></li>
                    <li><button title='Buy Now'>Buy Now</button></li>
                </ul>
            </div>
        </nav>
    </>
  )
}
