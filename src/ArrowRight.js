import * as React from 'react';

function SvgArrowRight(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M10 17l5-5-5-5v10z' />
			<path d='M0 24V0h24v24H0z' fill='none' />
		</svg>
	);
}

export default SvgArrowRight;
