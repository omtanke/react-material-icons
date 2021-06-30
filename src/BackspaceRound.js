import * as React from 'react';

function SvgBackspaceRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M22 3H7c-.69 0-1.23.35-1.59.88L.37 11.45c-.22.34-.22.77 0 1.11l5.04 7.56c.36.52.9.88 1.59.88h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3.7 13.3a.996.996 0 01-1.41 0L14 13.41l-2.89 2.89a.996.996 0 11-1.41-1.41L12.59 12 9.7 9.11a.996.996 0 111.41-1.41L14 10.59l2.89-2.89a.996.996 0 111.41 1.41L15.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z' />
		</svg>
	);
}

export default SvgBackspaceRound;
