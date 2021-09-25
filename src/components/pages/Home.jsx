import React from 'react'
import Player from 'react-player'
import Navbar from '../layout/Navbar'
import Work from './Work'
import "./Home.css"
const Home = () => {
    return (
			<>
				<Navbar />

				<section id="intro">
					<div className="player-wrapper">
						<Player
							className="react-player "
							url="https://www.youtube.com/watch?v=9v5-9ovoTGE"
							playing={true}
							controls={false}
							loop={true}
							muted={true}
							width="80%"
							height="80%"
						/>
					</div>
					<div className=" btn-group">
						<button className="btn-grad">Get Yours</button>
					</div>

					<div className="homefooter">
						<div className="boxbtn">
							<a className="btn-white-box">our team</a>
							<a className="btn-yellow-box">Join US</a>
						</div>
					</div>
			</section>
			
				
			</>
		);
}

export default Home
