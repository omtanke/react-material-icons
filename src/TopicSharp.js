import * as React from 'react';

function SvgTopicSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M12 6l-2-2H2v16h20V6H12zm2 10H6v-2h8v2zm4-4H6v-2h12v2z' />
		</svg>
	);
}

export default SvgTopicSharp;
