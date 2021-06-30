import * as React from 'react';

function SvgCarpenterRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M19.73 14.23L7.71 2.21a.996.996 0 00-1.41 0L3.7 4.8a1 1 0 00-.11 1.28l7.65 10.98c-.78.78-.78 2.05 0 2.83l1.41 1.41c.78.78 2.05.78 2.83 0l4.24-4.24c.79-.78.79-2.05.01-2.83zm-5.66 5.65l-1.41-1.41 4.24-4.24 1.41 1.41-4.24 4.24z' />
		</svg>
	);
}

export default SvgCarpenterRound;
