import * as React from 'react';

function SvgViewStreamSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M3 19v-6h18v6H3zM3 5v6h18V5H3z' />
		</svg>
	);
}

export default SvgViewStreamSharp;
