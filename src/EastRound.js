import * as React from 'react';

function SvgEastRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M14.29 5.71a.996.996 0 000 1.41L18.17 11H3c-.55 0-1 .45-1 1s.45 1 1 1h15.18l-3.88 3.88a.996.996 0 101.41 1.41l5.59-5.59a.996.996 0 000-1.41l-5.6-5.58a.996.996 0 00-1.41 0z' />
		</svg>
	);
}

export default SvgEastRound;
