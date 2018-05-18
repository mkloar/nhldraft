import React from 'react';


const SearchBox = ({ searchCategory, searchChange }) => {
	return(
		<div id="searchbox" className='dn db-l relative pa0 fr'>
			<input 
				className='tc white bg-transparent br2 bw1 b--solid custom--b--light-green border-box'
				type='search' 
				placeholder={`Filter by ${searchCategory}`}
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;