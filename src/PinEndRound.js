import * as React from 'react';

function SvgPinEndRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M20 12V6H4v12h10v2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v6h-2zm-1 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-4.34-.34a.996.996 0 000-1.41l-2.12-2.12 1.27-1.27c.31-.32.09-.86-.36-.86H9.5c-.28 0-.5.22-.5.5v3.95c0 .45.54.67.85.35l1.27-1.27 2.12 2.12c.39.4 1.03.4 1.42.01z' />
		</svg>
	);
}

export default SvgPinEndRound;
