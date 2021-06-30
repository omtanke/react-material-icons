import * as React from 'react';

function SvgDoNotStep(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M1.39 4.22l7.9 7.9c.18.2.18.5-.01.7a.485.485 0 01-.7 0L6.87 11.1c-.11.4-.26.78-.45 1.12l1.4 1.4c.2.2.2.51 0 .71a.485.485 0 01-.7 0l-1.27-1.27c-.24.29-.5.56-.77.8l1.28 1.28c.2.2.2.51 0 .71-.1.1-.23.15-.36.15s-.26-.05-.35-.15l-1.38-1.38c-.69.46-1.39.79-1.97 1.02-.78.31-1.3 1.04-1.3 1.88V20h9.5l3.33-3.33 5.94 5.94 1.41-1.41L2.81 2.81 1.39 4.22zm17.12 11.46l-1.41-1.41 4.48-4.48L23 11.2l-4.49 4.48zm2.37-6.6l-4.48 4.48-7.1-7.09L13.8 2l7.08 7.08z' />
		</svg>
	);
}

export default SvgDoNotStep;
