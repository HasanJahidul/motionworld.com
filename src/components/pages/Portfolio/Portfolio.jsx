import React from 'react'
import PortfolioWorks from './PortfolioWorks';
 import Player from "react-player";
 
 const Portfolio = () => {
     return (
				<>
					<div>
						<div id="wave" className="player-wrapper">
							<div className="video-grid">
								{PortfolioWorks.map((item) => {
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
						</div>
					</div>
				</>
			);
 }
 
 export default Portfolio
 