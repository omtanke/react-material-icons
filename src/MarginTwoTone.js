import * as React from 'react';

function SvgMarginTwoTone(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M5 19h14V5H5v14zM15 7h2v2h-2V7zm0 4h2v2h-2v-2zm-4-4h2v2h-2V7zm0 4h2v2h-2v-2zM7 7h2v2H7V7zm0 4h2v2H7v-2z'
				opacity={0.3}
			/>
			<path d='M7 7h2v2H7zM7 11h2v2H7z' />
			<path d='M3 3v18h18V3H3zm16 16H5V5h14v14z' />
			<path d='M11 7h2v2h-2zM15 11h2v2h-2zM11 11h2v2h-2zM15 7h2v2h-2z' />
		</svg>
	);
}

export default SvgMarginTwoTone;
