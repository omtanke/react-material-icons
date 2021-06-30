import * as React from 'react';

function SvgFormatStrikethroughTwoTone(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M3 12h18v2H3zm11-2V7h5V4H5v3h5v3zm-4 6h4v3h-4z' />
		</svg>
	);
}

export default SvgFormatStrikethroughTwoTone;
