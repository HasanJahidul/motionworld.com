import React from 'react'
import logo from '../../img/logo.png'
import "./nav.css"
export const navbar = () => {
    return (
        <div>
            <nav>
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <a className='biglogo' href='https://motionworldbd.com/'><img src={logo} className= 'logo'/></a>
      <ul className = "items">
        <li><a  href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">bites</a></li>
        <li><a href="#">Contact</a></li>
        <li><a className="btn-grad" href="#">get a qoute</a></li>
      </ul>
    
    </nav>
        </div>
    )
}
export default navbar