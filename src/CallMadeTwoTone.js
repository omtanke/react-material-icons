import * as React from 'react';

function SvgCallMadeTwoTone(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M5.41 20L17 8.41V15h2V5H9v2h6.59L4 18.59z' />
		</svg>
	);
}

export default SvgCallMadeTwoTone;
