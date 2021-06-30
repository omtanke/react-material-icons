import * as React from 'react';

function SvgChevronLeftRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M14.71 6.71a.996.996 0 00-1.41 0L8.71 11.3a.996.996 0 000 1.41l4.59 4.59a.996.996 0 101.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z' />
		</svg>
	);
}

export default SvgChevronLeftRound;
