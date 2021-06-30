import * as React from 'react';

function SvgSmartDisplaySharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M22 4H2v16h20V4zM9.5 16.5v-9l7 4.5-7 4.5z' />
		</svg>
	);
}

export default SvgSmartDisplaySharp;
