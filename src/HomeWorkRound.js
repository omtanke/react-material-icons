import * as React from 'react';

function SvgHomeWorkRound(props) {
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
			<path d='M20 3h-8c-.55 0-1 .45-1 1v1.61l.01.01 5 4.5c.63.56.99 1.38.99 2.23V13h2v2h-2v2h2v2h-2v2h3c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-5 4h-2V5h2v2zm4 4h-2V9h2v2zm0-4h-2V5h2v2z' />
			<path d='M15 20v-7.65a1 1 0 00-.33-.74l-5-4.5A.96.96 0 009 6.85c-.24 0-.48.09-.67.26l-5 4.5a.97.97 0 00-.33.74V20c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-4h4v4c0 .55.45 1 1 1h2c.55 0 1-.45 1-1z' />
		</svg>
	);
}

export default SvgHomeWorkRound;
