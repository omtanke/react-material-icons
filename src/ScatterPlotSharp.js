import * as React from 'react';

function SvgScatterPlotSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<circle cx={7} cy={14} r={3} />
			<circle cx={11} cy={6} r={3} />
			<circle cx={16.6} cy={17.6} r={3} />
		</svg>
	);
}

export default SvgScatterPlotSharp;
