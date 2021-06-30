import * as React from 'react';

function SvgSend(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0z' fill='none' />
			<path d='M2.01 21L23 12 2.01 3 2 10l15 2-15 2z' />
		</svg>
	);
}

export default SvgSend;
