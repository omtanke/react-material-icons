import * as React from 'react';

function SvgHideSourceRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M2.1 3.51c-.39.39-.39 1.03 0 1.42l1.56 1.56a9.916 9.916 0 00-1.59 6.69c.52 4.54 4.21 8.23 8.75 8.75 2.49.29 4.81-.34 6.69-1.59l1.56 1.56a.996.996 0 101.41-1.41L3.51 3.51a.996.996 0 00-1.41 0zM12 20c-4.41 0-8-3.59-8-8 0-1.48.41-2.86 1.12-4.06l10.94 10.94C14.86 19.59 13.48 20 12 20zM7.94 5.12L6.49 3.66A9.91 9.91 0 0112 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51l-1.46-1.46A7.869 7.869 0 0020 12c0-4.41-3.59-8-8-8-1.48 0-2.86.41-4.06 1.12z' />
		</svg>
	);
}

export default SvgHideSourceRound;
