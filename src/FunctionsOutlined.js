import * as React from 'react';

function SvgFunctionsOutlined(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7V4z' />
		</svg>
	);
}

export default SvgFunctionsOutlined;
