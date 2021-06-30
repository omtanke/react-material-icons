import * as React from 'react';

function SvgSocialDistanceRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M4 5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4.78 3.58a6.95 6.95 0 00-5.56 0A2.01 2.01 0 002 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85zM18 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm2.78 1.58a6.95 6.95 0 00-5.56 0A2.01 2.01 0 0014 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85zm.87 8.07l-2.79-2.79a.501.501 0 00-.86.35V16H6v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79a.5.5 0 00.85-.36V18h12v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7z' />
		</svg>
	);
}

export default SvgSocialDistanceRound;
