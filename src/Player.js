import React from 'react';

const Player = ({ fullName, country, height, weight, position, birthDay, id, style }) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5' style={style}>
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} width={100} height={100} />
			<h2>{fullName}</h2>
			<p> {height} - {weight}lbs; {position} ; {birthDay} y/o</p>
			<p>{country}</p>
		</div>
	);
}

export default Player;