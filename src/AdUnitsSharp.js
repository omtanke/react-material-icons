import * as React from 'react';

function SvgAdUnitsSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M19 1H5v22h14V1zm-2 18H7V5h10v14z' />
			<path d='M8 6h8v2H8z' />
		</svg>
	);
}

export default SvgAdUnitsSharp;
