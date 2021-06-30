import * as React from 'react';

function SvgDetailsRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M11.13 4.57l-8.3 14.94c-.37.67.11 1.49.87 1.49h16.6c.76 0 1.24-.82.87-1.49l-8.3-14.94a.997.997 0 00-1.74 0zM13 8.92L18.6 19H13V8.92zm-2 0V19H5.4L11 8.92z' />
		</svg>
	);
}

export default SvgDetailsRound;
