import * as React from 'react';

function SvgImageNotSupportedSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M21.9 21.9l-8.49-8.49L3 3l-.9-.9L.69 3.51 3 5.83V21h15.17l2.31 2.31 1.42-1.41zM5 18l3.5-4.5 2.5 3.01L12.17 15l3 3H5zm16 .17L5.83 3H21v15.17z' />
		</svg>
	);
}

export default SvgImageNotSupportedSharp;
