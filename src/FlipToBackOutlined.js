import * as React from 'react';

function SvgFlipToBackOutlined(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8a2 2 0 00-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7a2 2 0 002 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12a2 2 0 002 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z' />
		</svg>
	);
}

export default SvgFlipToBackOutlined;
