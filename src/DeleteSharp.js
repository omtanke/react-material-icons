import * as React from 'react';

function SvgDeleteSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M6 21h12V7H6v14zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z' />
		</svg>
	);
}

export default SvgDeleteSharp;
