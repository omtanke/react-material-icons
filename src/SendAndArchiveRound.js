import * as React from 'react';

function SvgSendAndArchiveRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm2.15 5.85l-1.79 1.79c-.2.2-.51.2-.71 0l-1.79-1.79c-.32-.31-.1-.85.35-.85h1.29v-2.5c0-.28.22-.5.5-.5s.5.22.5.5V17h1.29a.5.5 0 01.36.85z' />
			<path d='M17 10c.1 0 .19.01.28.01L3 4v6l8 2-8 2v6l7-2.95V17c0-3.87 3.13-7 7-7z' />
		</svg>
	);
}

export default SvgSendAndArchiveRound;
