import * as React from 'react';

function SvgInputSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<g fill='none'>
				<path d='M0 0h24v24H0V0z' />
				<path d='M0 0h24v24H0V0z' opacity={0.87} />
			</g>
			<path d='M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14a2 2 0 00-2-2zM11 16l4-4-4-4v3H1v2h10v3zM23 3.01H1V9h2V4.99h18v14.03H3V15H1v5.99h22V3.01zM11 16l4-4-4-4v3H1v2h10v3z' />
		</svg>
	);
}

export default SvgInputSharp;
