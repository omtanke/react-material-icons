import * as React from 'react';

function SvgArrowBackIosRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' opacity={0.87} />
			<path d='M16.62 2.99a1.25 1.25 0 00-1.77 0L6.54 11.3a.996.996 0 000 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z' />
		</svg>
	);
}

export default SvgArrowBackIosRound;
