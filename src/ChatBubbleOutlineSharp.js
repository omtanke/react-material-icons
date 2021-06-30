import * as React from 'react';

function SvgChatBubbleOutlineSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M22 2H2v20l4-4h16V2zm-2 14H6l-2 2V4h16v12z' />
		</svg>
	);
}

export default SvgChatBubbleOutlineSharp;
