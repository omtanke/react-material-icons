import * as React from 'react';

function SvgEmojiFlagsRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<g fill='none'>
				<path d='M0 0h24v24H0z' />
				<path d='M0 0h24v24H0z' />
			</g>
			<path d='M19 9h-5l-.72-1.45c-.17-.34-.52-.55-.9-.55H7V5.72c.6-.34 1-.98 1-1.72 0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V20c0 .55.45 1 1 1s1-.45 1-1v-3h5l.72 1.45a1 1 0 00.89.55H19c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1zm-1 8h-4l-1-2H7V9h5l1 2h5v6z' />
		</svg>
	);
}

export default SvgEmojiFlagsRound;
