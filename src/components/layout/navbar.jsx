import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import logo from '../../img/logo.png';
//import "./nav.css"
import "./navbar.css";


export const Navbar = () => {
  const [ShowMenu, setShowMenu] = useState(false);
    return (
			<>
				<div id="navbar">
					<nav className="main-nav">
						{/* 1st logo part  */}
						<div className="logo">
							<img src={logo} className="logo" />
						</div>

						{/* 2nd menu part  */}
						<div
							className={ShowMenu ? "menu-link mobile-menu-link" : "menu-link"}
						>
							<ul className="items">
								<li>
									<Link
										activeClass="active"
										to="home"
										spy={true}
										smooth={true}
										offset={0}
										duration={500}
									>
										home
									</Link>
								</li>
								<li>
									<Link
										activeClass="active"
										to="work"
										spy={true}
										smooth={true}
										offset={0}
										duration={500}
									>
										work
									</Link>
								</li>
								<li>
									<Link
										activeClass="active"
										to="about"
										spy={true}
										smooth={true}
										offset={0}
										duration={500}
									>
										about
									</Link>
								</li>
								<li>
									<Link
										activeClass="active"
										to="bites"
										spy={true}
										smooth={true}
										offset={0}
										duration={500}
									>
										bites
									</Link>
								</li>
								<li>
									<Link
										activeClass="active"
										to="contact"
										spy={true}
										smooth={true}
										offset={0}
										duration={500}
									>
										contact
									</Link>
								</li>
								<button className=" btn btn-grad">Get Yours</button>
							</ul>
						</div>
						{/* hamburget menu start  */}
						<div className="hamburger-menu">
							<a href="#" onClick={() => setShowMenu(!ShowMenu)}>
								<GiHamburgerMenu />
							</a>
						</div>
					</nav>
				</div>
			</>
		);
}
export default Navbar