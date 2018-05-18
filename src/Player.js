import React from 'react';

const Player = ({fullName, country, height, weight, position, birthDay, id}) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{fullName}</h2>
				<p> {height} - {weight} ; {position} ; {birthDay} y/o</p>
				<p>{country}</p>
			</div>
		</div>
	);
}

export default Player;