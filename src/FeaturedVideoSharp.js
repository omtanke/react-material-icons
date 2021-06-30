import * as React from 'react';

function SvgFeaturedVideoSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M23 3H1v18h22V3zm-11 9H3V5h9v7z' />
		</svg>
	);
}

export default SvgFeaturedVideoSharp;
