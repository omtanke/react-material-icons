import * as React from 'react';

function SvgOpenInNewOffRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M16.79 5.8l-1.94-1.94a.506.506 0 01.36-.86h5.29c.28 0 .5.22.5.5v5.29c0 .45-.54.67-.85.35L18.21 7.2l-4.09 4.09-1.41-1.41 4.08-4.08zM19 13v3.17l2 2V13c0-.55-.45-1-1-1s-1 .45-1 1zm.07 8.9l-.9-.9H5a2 2 0 01-2-2V5.83l-.9-.9a.996.996 0 111.41-1.41l16.97 16.97a.996.996 0 11-1.41 1.41zm-2.9-2.9l-4.88-4.88-.88.88A.996.996 0 119 13.59l.88-.88L5 7.83V19h11.17zM7.83 5H11c.55 0 1-.45 1-1s-.45-1-1-1H5.83l2 2z' />
		</svg>
	);
}

export default SvgOpenInNewOffRound;
