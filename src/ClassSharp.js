import * as React from 'react';

function SvgClassSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M20 2H4v20h16V2zM6 4h5v8l-2.5-1.5L6 12V4z' />
		</svg>
	);
}

export default SvgClassSharp;
