import * as React from 'react';

function SvgPlayArrowTwoTone(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M10 8.64v6.72L15.27 12z' opacity={0.3} />
			<path d='M8 19l11-7L8 5v14zm2-10.36L15.27 12 10 15.36V8.64z' />
		</svg>
	);
}

export default SvgPlayArrowTwoTone;
