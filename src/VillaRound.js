import * as React from 'react';

function SvgVillaRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M7 21H4c-.55 0-1-.45-1-1V8.69c0-.42.25-.79.64-.94l11-4.23a1 1 0 011.36.94V10H8c-.55 0-1 .45-1 1v10zm10-9h-7c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h4v-4c0-.55.45-1 1-1s1 .45 1 1v4h4c.55 0 1-.45 1-1v-8c0-1.1-.9-2-2-2s-2 .9-2 2z' />
		</svg>
	);
}

export default SvgVillaRound;
