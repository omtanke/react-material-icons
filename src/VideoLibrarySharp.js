import * as React from 'react';

function SvgVideoLibrarySharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M4 6H2v16h16v-2H4V6zm18-4H6v16h16V2zM12 14.5v-9l6 4.5-6 4.5z' />
		</svg>
	);
}

export default SvgVideoLibrarySharp;
