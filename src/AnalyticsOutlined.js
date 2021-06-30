import * as React from 'react';

function SvgAnalyticsOutlined(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z' />
			<path d='M7 12h2v5H7zM15 7h2v10h-2zM11 14h2v3h-2zM11 10h2v2h-2z' />
		</svg>
	);
}

export default SvgAnalyticsOutlined;
