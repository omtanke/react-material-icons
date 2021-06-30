import * as React from 'react';

function SvgEcoRound(props) {
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
			<path d='M6.05 8.05a7.001 7.001 0 00-.02 9.88c1.47-3.4 4.09-6.24 7.36-7.93A15.952 15.952 0 008 19.32c2.6 1.23 5.8.78 7.95-1.37 2.99-2.99 3.83-11.14 4.01-13.38a.489.489 0 00-.53-.53c-2.24.18-10.39 1.02-13.38 4.01z' />
		</svg>
	);
}

export default SvgEcoRound;
