import * as React from 'react';

function SvgHighlightRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0z' fill='none' />
			<path d='M6.29 14.29L9 17v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-4l2.71-2.71a.99.99 0 00.29-.71V10c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v3.59c0 .26.11.52.29.7zM12 2c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1s-1-.45-1-1V3c0-.55.45-1 1-1zM4.21 5.17c.39-.39 1.02-.39 1.42 0l.71.71a.996.996 0 11-1.41 1.41l-.72-.71a.996.996 0 010-1.41zm13.46.71l.71-.71a.996.996 0 111.41 1.41l-.71.71a.996.996 0 11-1.41-1.41z' />
		</svg>
	);
}

export default SvgHighlightRound;
