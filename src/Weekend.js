import * as React from 'react';

function SvgWeekend(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M21 10c-1.1 0-2 .9-2 2v3H5v-3a2 2 0 10-4 0v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.52 2 2.81V14h12v-2.03c0-1.3.84-2.4 2-2.81V7c0-1.1-.9-2-2-2z' />
		</svg>
	);
}

export default SvgWeekend;
