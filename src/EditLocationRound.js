import * as React from 'react';

function SvgEditLocationRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M12 2c-4.2 0-8 3.22-8 8.2 0 3.18 2.45 6.92 7.34 11.23.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2 20 5.22 16.2 2 12 2zM9.73 13.5H8.5v-1.44l3.93-3.92 1.43 1.43-3.77 3.78c-.1.1-.22.15-.36.15zm5.55-5.34l-.7.7-1.44-1.44.7-.7a.38.38 0 01.54 0l.9.9c.15.15.15.39 0 .54z' />
		</svg>
	);
}

export default SvgEditLocationRound;
