import * as React from 'react';

function SvgPlayDisabledRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M2.1 3.51a.996.996 0 000 1.41l5.9 5.9v6.35c0 .79.87 1.27 1.54.84l3.45-2.2 6.08 6.08a.996.996 0 101.41-1.41L3.51 3.51a.996.996 0 00-1.41 0zm15.58 9.33a1 1 0 000-1.69L9.54 5.98a1.01 1.01 0 00-.84-.11l7.75 7.75 1.23-.78z' />
		</svg>
	);
}

export default SvgPlayDisabledRound;
