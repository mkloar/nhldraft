import React from 'react';
import Player from './Player';



var PlayerList = ({players}) => {
	
	return (
			<div className="flex flex-wrap justify-center">
				{
					

					players.map((player,i) => {
						return (
							<Player
							key={i}
							id={i}
							fullName={players[i].fullName}
							country={players[i].country}
							height={players[i].height}						
							weight={players[i].weight}
							position={players[i].position}
							birthDay={players[i].birthDay}
							/>
						)
					})

				}



			</div>
		)
};	

//console.log(PlayerList);

export default PlayerList;
	