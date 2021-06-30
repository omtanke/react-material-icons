import * as React from 'react';

function SvgPolicyRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<g fill='none'>
				<path d='M0 0h24v24H0z' />
				<path d='M0 0h24v24H0z' />
			</g>
			<path d='M21 6.3c0-.79-.47-1.51-1.19-1.83l-7-3.11c-.52-.23-1.11-.23-1.62 0l-7 3.11C3.47 4.79 3 5.51 3 6.3V11c0 5.55 3.84 10.74 9 12 2.3-.56 4.33-1.9 5.88-3.71l-3.12-3.12a4.994 4.994 0 01-6.29-.64 5.003 5.003 0 010-7.07 5.003 5.003 0 017.07 0 5.006 5.006 0 01.64 6.29l2.9 2.9C20.29 15.69 21 13.38 21 11V6.3z' />
			<circle cx={12} cy={12} r={3} />
		</svg>
	);
}

export default SvgPolicyRound;
