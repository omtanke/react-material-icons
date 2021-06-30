import * as React from 'react';

function SvgCrop75Sharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M21 7H3v10h18V7zm-2 8H5V9h14v6z' />
		</svg>
	);
}

export default SvgCrop75Sharp;
