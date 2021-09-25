import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import logo from '../../img/logo.png'
//import "./nav.css"
import "./navbar.css";
export const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
			//     <div>
			//         <nav>
			//   <input type="checkbox" id="check"/>
			//   <label for="check" class="checkbtn">
			//     <i class="fas fa-bars"></i>
			//   </label>
			//   <a className='biglogo' href='https://motionworldbd.com/'><img src={logo} className= 'logo'/></a>
			//   <ul className = "items">
			//     <li><a  href="#">Home</a></li>
			//     <li><a href="#">About</a></li>
			//     <li><a href="#">bites</a></li>
			//     <li><a href="#">Contact</a></li>
			//     <li><a className="btn-grad" href="#">get a qoute</a></li>
			//   </ul>

			// </nav>
			//     </div>
			<>
				<div id="navbar">
					<nav className="main-nav">
						{/* 1st logo part  */}
						<div className="logo">
							<img src={logo} className="logo" />
						</div>

						{/* 2nd menu part  */}
						<div
							className={
								showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
							}
						>
							<ul className="items">
								<li>
									<NavLink to="/">Home</NavLink>
								</li>
								<li>
									<NavLink to="/about">Work</NavLink>
								</li>
								<li>
									<NavLink to="/service">About</NavLink>
								</li>
								<li>
									<NavLink to="/contact">bites</NavLink>
								</li>
								<li>
									<NavLink to="/contact">contact</NavLink>
								</li>
								<button className=" btn btn-grad">Get Yours</button>
							</ul>
						</div>

						{/* 3rd social media links */}
						<div className="social-media">
							{/* hamburget menu start  */}
							<div className="hamburger-menu">
								<a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
									<GiHamburgerMenu />
								</a>
							</div>
						</div>
					</nav>
				</div>
			</>
		);
}
export default Navbar