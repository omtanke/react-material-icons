import * as React from 'react';

function SvgNoteSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M22 10l-6-6H2v16h20V10zm-7-4.5l5.5 5.5H15V5.5z' />
		</svg>
	);
}

export default SvgNoteSharp;
