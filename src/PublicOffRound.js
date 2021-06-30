import * as React from 'react';

function SvgPublicOffRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M11 8.17L6.49 3.66A9.91 9.91 0 0112 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51l-1.46-1.46A7.842 7.842 0 0020 12c0-3.35-2.07-6.22-5-7.41V5c0 1.1-.9 2-2 2h-2v1.17zm9.49 13.73a.996.996 0 01-1.41 0l-1.56-1.56c-2.07 1.37-4.68 2-7.45 1.48-3.95-.75-7.13-3.92-7.88-7.88-.52-2.77.1-5.38 1.48-7.45L2.1 4.93a.996.996 0 111.41-1.41l16.97 16.97c.4.39.4 1.02.01 1.41zM11 18c-1.1 0-2-.9-2-2v-1l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.08 3.05 7.44 7 7.93V18z' />
		</svg>
	);
}

export default SvgPublicOffRound;
