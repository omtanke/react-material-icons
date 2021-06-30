import * as React from 'react';

function SvgCrop32Sharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M21 4H3v16h18V4zm-2 14H5V6h14v12z' />
		</svg>
	);
}

export default SvgCrop32Sharp;
