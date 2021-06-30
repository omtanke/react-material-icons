import * as React from 'react';

function SvgExpandLessRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M11.29 8.71L6.7 13.3a.996.996 0 101.41 1.41L12 10.83l3.88 3.88a.996.996 0 101.41-1.41L12.7 8.71a.996.996 0 00-1.41 0z' />
		</svg>
	);
}

export default SvgExpandLessRound;
