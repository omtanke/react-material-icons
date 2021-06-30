import * as React from 'react';

function SvgAutoAwesomeRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M19.46 8l.79-1.75L22 5.46a.5.5 0 000-.91l-1.75-.79L19.46 2a.5.5 0 00-.91 0l-.79 1.75-1.76.79a.5.5 0 000 .91l1.75.79.79 1.76c.18.39.74.39.92 0zM11.5 9.5L9.91 6c-.35-.78-1.47-.78-1.82 0L6.5 9.5 3 11.09c-.78.36-.78 1.47 0 1.82l3.5 1.59L8.09 18c.36.78 1.47.78 1.82 0l1.59-3.5 3.5-1.59c.78-.36.78-1.47 0-1.82L11.5 9.5zm7.04 6.5l-.79 1.75-1.75.79a.5.5 0 000 .91l1.75.79.79 1.76a.5.5 0 00.91 0l.79-1.75 1.76-.79a.5.5 0 000-.91l-1.75-.79-.79-1.76a.508.508 0 00-.92 0z' />
		</svg>
	);
}

export default SvgAutoAwesomeRound;
