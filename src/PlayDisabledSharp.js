import * as React from 'react';

function SvgPlayDisabledSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M16.45 13.62L19 12 8 5v.17zM2.81 2.81L1.39 4.22 8 10.83V19l4.99-3.18 6.79 6.79 1.41-1.42z' />
		</svg>
	);
}

export default SvgPlayDisabledSharp;
