import * as React from 'react';

function SvgNightlifeRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M2.87 5h10.26c.8 0 1.28.89.83 1.55L9 14v4h1c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1h1v-4L2.04 6.55C1.59 5.89 2.07 5 2.87 5zm7.23 4l1.4-2H4.49l1.4 2h4.21zM19 5h1.5c.83 0 1.5.67 1.5 1.5S21.33 8 20.5 8H19v9c0 1.84-1.64 3.28-3.54 2.95-1.21-.21-2.2-1.2-2.41-2.41A2.995 2.995 0 0116 14a3 3 0 011 .17V7c0-1.1.9-2 2-2z' />
		</svg>
	);
}

export default SvgNightlifeRound;
