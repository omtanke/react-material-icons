import * as React from 'react';

function SvgHdrAutoSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M12.04 8.04h-.09l-1.6 4.55h3.29z' />
			<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.21 15l-.98-2.81H9.78l-1 2.81h-1.9l4.13-11h1.97l4.13 11h-1.9z' />
		</svg>
	);
}

export default SvgHdrAutoSharp;
