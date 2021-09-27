import React, { useState } from 'react';
import Player from "react-player";
import { Link } from "react-router-dom";
import Allwork from './AllWork';
import './work.css';
export default function Work() {

	const [menuItems, setMenuItems] = useState(Allwork);
       
    
    return (
			<section id="work">
				<div className="page-title">
					<h5> work</h5>
				</div>
				<div id="wave" className="player-wrapper">
					<div className="video-grid">
						{Allwork.map((item) => {
							return (
								<Player
									className="player "
									url={item.url}
									playing={true}
									controls={false}
									loop={true}
									muted={true}
									width="80%"
									height="80%"
								/>
							);
						})}
					</div>
					<Link to="/work" className="btn-grad">
						
						{/* <button className="btn-grad">See All</button> */}
						see all
					</Link>
				</div>
			</section>
		);
}
