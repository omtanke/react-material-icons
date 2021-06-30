import * as React from 'react';

function SvgDynamicFeedSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M8 8H6v9h11v-2H8z' />
			<path d='M22 3H10v10h12V3zm-2 8h-8V7h8v4zM4 12H2v9h11v-2H4z' />
		</svg>
	);
}

export default SvgDynamicFeedSharp;
