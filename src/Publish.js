import * as React from 'react';

function SvgPublish(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0z' fill='none' />
			<path d='M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z' />
		</svg>
	);
}

export default SvgPublish;
