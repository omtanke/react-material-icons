import * as React from 'react';

function SvgMinimizeSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M6 19h12v2H6v-2z' />
		</svg>
	);
}

export default SvgMinimizeSharp;
