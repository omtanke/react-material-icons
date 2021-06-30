import * as React from 'react';

function SvgShortTextOutlined(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0z' fill='none' />
			<path d='M4 9h16v2H4V9zm0 4h10v2H4v-2z' />
		</svg>
	);
}

export default SvgShortTextOutlined;
