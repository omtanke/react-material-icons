import * as React from 'react';

function SvgUploadSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z' />
		</svg>
	);
}

export default SvgUploadSharp;
