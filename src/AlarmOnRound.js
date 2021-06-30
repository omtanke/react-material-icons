import * as React from 'react';

function SvgAlarmOnRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M14.94 10.11l-4.4 4.42-1.6-1.6a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06L10 16.11c.29.29.77.29 1.06 0L16 11.17c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0zm6.24-5.1L18.1 2.45c-.42-.35-1.05-.3-1.41.13-.35.42-.29 1.05.13 1.41l3.07 2.56c.42.35 1.05.3 1.41-.13a1 1 0 00-.12-1.41zM4.1 6.55l3.07-2.56c.43-.36.49-.99.13-1.41a.988.988 0 00-1.4-.13L2.82 5.01a1 1 0 00-.12 1.41c.35.43.98.48 1.4.13zM12 4a9 9 0 10.001 18.001A9 9 0 0012 4zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z' />
		</svg>
	);
}

export default SvgAlarmOnRound;
