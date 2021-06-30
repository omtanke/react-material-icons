import * as React from 'react';

function SvgStackedBarChart(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0z' fill='none' />
			<path d='M6 10h3v10H6zm0-5h3v4H6zm10 11h3v4h-3zm0-3h3v2h-3zm-5 0h3v7h-3zm0-4h3v3h-3z' />
		</svg>
	);
}

export default SvgStackedBarChart;
