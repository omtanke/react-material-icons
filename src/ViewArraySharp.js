import * as React from 'react';

function SvgViewArraySharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M21 5h-3v14h3V5zm-4 0H7v14h10V5zM6 5H3v14h3V5z' />
		</svg>
	);
}

export default SvgViewArraySharp;
