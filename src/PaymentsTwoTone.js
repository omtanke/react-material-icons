import * as React from 'react';

function SvgPaymentsTwoTone(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M17 6H3v8h14V6zm-7 7c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'
				opacity={0.3}
			/>
			<path d='M17 4H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM3 14V6h14v8H3z' />
			<path d='M10 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM23 7v11c0 1.1-.9 2-2 2H4v-2h17V7h2z' />
		</svg>
	);
}

export default SvgPaymentsTwoTone;
