import * as React from 'react';

function SvgNearMeRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M18.75 3.94L4.07 10.08c-.83.35-.81 1.53.02 1.85L9.43 14a1 1 0 01.57.57l2.06 5.33c.32.84 1.51.86 1.86.03l6.15-14.67c.33-.83-.5-1.66-1.32-1.32z' />
		</svg>
	);
}

export default SvgNearMeRound;
