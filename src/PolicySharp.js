import * as React from 'react';

function SvgPolicySharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M21 5l-9-4-9 4v6c0 5.55 3.84 10.74 9 12 2.3-.56 4.33-1.9 5.88-3.71l-3.12-3.12a4.994 4.994 0 01-6.29-.64 5.003 5.003 0 010-7.07 5.003 5.003 0 017.07 0 5.006 5.006 0 01.64 6.29l2.9 2.9C20.29 15.69 21 13.38 21 11V5z' />
			<circle cx={12} cy={12} r={3} />
		</svg>
	);
}

export default SvgPolicySharp;
