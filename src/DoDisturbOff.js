import * as React from 'react';

function SvgDoDisturbOff(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M17 11v2h-1.17l4.51 4.51A9.91 9.91 0 0022 12c0-5.52-4.48-10-10-10-2.04 0-3.93.61-5.51 1.66L13.83 11H17zM1.39 4.22l2.27 2.27A9.91 9.91 0 002 12c0 5.52 4.48 10 10 10 2.04 0 3.93-.61 5.51-1.66l2.27 2.27 1.41-1.41L2.81 2.81 1.39 4.22zM7 11h1.17l2 2H7v-2z' />
		</svg>
	);
}

export default SvgDoDisturbOff;
