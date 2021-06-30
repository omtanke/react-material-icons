import * as React from 'react';

function SvgChangeHistoryRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M12 7.77L18.39 18H5.61L12 7.77m-.85-2.41l-8.2 13.11c-.41.67.07 1.53.85 1.53h16.4a1 1 0 00.85-1.53l-8.2-13.11a1 1 0 00-1.7 0z' />
		</svg>
	);
}

export default SvgChangeHistoryRound;
