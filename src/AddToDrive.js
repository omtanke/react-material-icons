import * as React from 'react';

function SvgAddToDrive(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M20 21v-3h3v-2h-3v-3h-2v3h-3v2h3v3h2zm-4.97.5H5.66c-.72 0-1.38-.38-1.73-1l-2.36-4.1c-.36-.62-.35-1.38.01-2L7.92 3.49c.36-.61 1.02-.99 1.73-.99h4.7c.71 0 1.37.38 1.73.99l4.48 7.71a6.176 6.176 0 00-2.4-.14L14.35 4.5h-4.7L3.31 15.41l2.35 4.09h7.89c.35.77.85 1.45 1.48 2zM13.34 15c-.22.63-.34 1.3-.34 2H7.25l-.73-1.27 4.58-7.98h1.8l2.53 4.42c-.56.42-1.05.93-1.44 1.51l-2-3.49L9.25 15h4.09z' />
		</svg>
	);
}

export default SvgAddToDrive;
