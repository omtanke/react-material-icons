import * as React from 'react';

function SvgOpacityTwoTone(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M24 0H0v24h24V0zm0 0H0v24h24V0zM0 24h24V0H0v24z' fill='none' />
			<path
				d='M16.24 9.65L12 5.27 7.76 9.6C6.62 10.73 6.01 12 6 14h12c-.01-2-.62-3.23-1.76-4.35z'
				opacity={0.3}
			/>
			<path d='M17.66 8L12 2.35 6.34 8A8.02 8.02 0 004 13.64c0 2 .78 4.11 2.34 5.67a7.99 7.99 0 0011.32 0c1.56-1.56 2.34-3.67 2.34-5.67S19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z' />
		</svg>
	);
}

export default SvgOpacityTwoTone;
