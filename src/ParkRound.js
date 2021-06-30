import * as React from 'react';

function SvgParkRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M16.96 12h.08c.81 0 1.28-.91.82-1.57l-5.08-7.25a1 1 0 00-1.64 0L6.1 10.43c-.46.66.02 1.57.83 1.57h.04l-2.9 4.46c-.44.66.04 1.54.84 1.54h5.08v2.02c0 1.09.89 1.98 1.98 1.98 1.09 0 1.98-.89 1.98-1.98V18h5.15c.8 0 1.28-.89.83-1.55L16.96 12z' />
		</svg>
	);
}

export default SvgParkRound;
