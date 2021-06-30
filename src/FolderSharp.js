import * as React from 'react';

function SvgFolderSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M10 4H2v16h20V6H12l-2-2z' />
		</svg>
	);
}

export default SvgFolderSharp;
