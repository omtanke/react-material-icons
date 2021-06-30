import * as React from 'react';

function SvgHideImageRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M19 3H5.83L21 18.17V5c0-1.1-.9-2-2-2zM3.51 3.51A.996.996 0 102.1 4.92l.9.91V19c0 1.1.9 2 2 2h13.17l.9.9a.996.996 0 101.41-1.41L3.51 3.51zM7 17a.5.5 0 01-.4-.8l2-2.67c.2-.27.6-.27.8 0L11.25 16l.82-1.1 2.1 2.1H7z' />
		</svg>
	);
}

export default SvgHideImageRound;
