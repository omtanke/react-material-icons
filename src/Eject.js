import * as React from 'react';

function SvgEject(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 24V0h24v24H0z' fill='none' />
			<path d='M5 17h14v2H5zm7-12L5.33 15h13.34z' />
		</svg>
	);
}

export default SvgEject;
