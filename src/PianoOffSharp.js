import * as React from 'react';

function SvgPianoOffSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M21.19 21.19L2.81 2.81 1.39 4.22 3 5.83V21h15.17l1.61 1.61 1.41-1.42zM8.25 19H5V7.83l2 2v4.67h1.25V19zm1.5 0v-4.5H11v-.67l3.25 3.25V19h-4.5zM5.83 3H21v15.17l-2-2V5h-2v9.17l-4-4V5h-2v3.17L5.83 3z' />
		</svg>
	);
}

export default SvgPianoOffSharp;
