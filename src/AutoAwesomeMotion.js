import * as React from 'react';

function SvgAutoAwesomeMotion(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0z' fill='none' />
			<path d='M14 2H4a2 2 0 00-2 2v10h2V4h10V2zm4 4H8a2 2 0 00-2 2v10h2V8h10V6zm2 4h-8a2 2 0 00-2 2v8a2 2 0 002 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z' />
		</svg>
	);
}

export default SvgAutoAwesomeMotion;
