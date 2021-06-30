import * as React from 'react';

function SvgSkipPreviousTwoTone(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M16 14.14V9.86L12.97 12z' opacity={0.3} />
			<path d='M6 6h2v12H6zm12 12V6l-8.5 6 8.5 6zm-2-3.86L12.97 12 16 9.86v4.28z' />
		</svg>
	);
}

export default SvgSkipPreviousTwoTone;
