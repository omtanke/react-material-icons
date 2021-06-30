import * as React from 'react';

function SvgTurnedInSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M19 3H5v18l7-3 7 3V3z' />
		</svg>
	);
}

export default SvgTurnedInSharp;
