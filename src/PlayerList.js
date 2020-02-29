import React from 'react';
import Player from './Player';
import { List } from 'react-virtualized';

const PlayerList = ({ players }) => {
	const rowRenderer = ({ index, key, style } ) => {
		return (
			<Player
				key={index}
				id={index}
				fullName={players[index].fullName}
				country={players[index].country}
				height={players[index].height}
				weight={players[index].weight}
				position={players[index].position}
				birthDay={players[index].birthDay}
				style={style}
			/>
		);
	}

	return (
		<div className="flex flex-wrap justify-center">
			<List
				rowCount={players.length}
				rowRenderer={rowRenderer}
				overscanRowCount={3}
				width={1500}
				height={800}
				rowHeight={270}
			/>
		</div>
	)
};
export default PlayerList;
