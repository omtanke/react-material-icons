import * as React from 'react';

function SvgDownload(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z' />
		</svg>
	);
}

export default SvgDownload;
