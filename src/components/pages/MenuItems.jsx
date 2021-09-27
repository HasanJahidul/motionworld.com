import React from "react";
import Player from "react-player";

function MenuItems({ menuItem }) {
	return (
		<div className="">
			{menuItem.map((item) => {
				return (
					// <div className="allworks portfolio " key={item.id}>
					<div className="items">
						<Player
							className="react-player "
							url={item.url}
							playing={true}
							controls={false}
							loop={true}
							muted={true}
							width="80%"
							height="80%"
						/>
						{/* // 		<ul className="hover-items">
					// 			<li>
					// 				<a href={item.link1}>{item.icon1}</a>
					// 				<a href={item.link2}>{item.icon2}</a>
					// 			</li>
					// 		</ul>
					// 	</div> */}
					</div>
				);
			})}
		</div>
	);
}

export default MenuItems;
