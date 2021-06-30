import * as React from 'react';

function SvgSpeedRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0z' fill='none' />
			<path d='M19.46 10a1 1 0 00-.07 1 7.55 7.55 0 01.52 1.81 8 8 0 01-.69 4.73 1 1 0 01-.89.53H5.68a1 1 0 01-.89-.54A8 8 0 0113 6.06a7.69 7.69 0 012.11.56 1 1 0 001-.07 1 1 0 00-.17-1.76A10 10 0 003.35 19a2 2 0 001.72 1h13.85a2 2 0 001.74-1 10 10 0 00.55-8.89 1 1 0 00-1.75-.11z' />
			<path d='M10.59 12.59a2 2 0 002.83 2.83l5.66-8.49z' />
		</svg>
	);
}

export default SvgSpeedRound;
