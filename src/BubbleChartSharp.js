import * as React from 'react';

function SvgBubbleChartSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<circle cx={7.2} cy={14.4} r={3.2} />
			<circle cx={14.8} cy={18} r={2} />
			<circle cx={15.2} cy={8.8} r={4.8} />
		</svg>
	);
}

export default SvgBubbleChartSharp;
