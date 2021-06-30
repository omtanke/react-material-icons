import * as React from 'react';

function SvgNotes(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z' />
		</svg>
	);
}

export default SvgNotes;
