import * as React from 'react';

function SvgPriorityHighTwoTone(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<circle cx={12} cy={19} r={2} />
			<path d='M10 3h4v12h-4z' />
		</svg>
	);
}

export default SvgPriorityHighTwoTone;
