import * as React from 'react';

function SvgTrafficRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M19.96 10.59a.514.514 0 00-.5-.59H17V8.86a4.01 4.01 0 002.96-3.27.514.514 0 00-.5-.59H17V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H4.54c-.31 0-.54.28-.5.59A4.01 4.01 0 007 8.86V10H4.54c-.31 0-.54.28-.5.59A4.01 4.01 0 007 13.86V15H4.54c-.31 0-.54.28-.5.59A4.01 4.01 0 007 18.86V20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1.14a4.01 4.01 0 002.96-3.27.514.514 0 00-.5-.59H17v-1.14a4.01 4.01 0 002.96-3.27zM12 19a2 2 0 11-.001-3.999A2 2 0 0112 19zm0-5a2 2 0 11-.001-3.999A2 2 0 0112 14zm0-5a2 2 0 01-2-2c0-1.11.89-2 2-2a2 2 0 110 4z' />
		</svg>
	);
}

export default SvgTrafficRound;
