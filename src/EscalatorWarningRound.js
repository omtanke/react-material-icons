import * as React from 'react';

function SvgEscalatorWarningRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M6.5 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5zm3 2.5h-2.84c-.58.01-1.14.32-1.45.86l-.92 1.32L9.72 8a2.02 2.02 0 00-1.71-1H5c-1.1 0-2 .9-2 2v5c0 .55.45 1 1 1h.5v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-9.39l2.24 3.89c.18.31.51.5.87.5h1.1c.33 0 .63-.16.82-.43l.47-.67V21c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-4c.55 0 1-.45 1-1v-2.5c0-.82-.67-1.5-1.5-1.5z' />
		</svg>
	);
}

export default SvgEscalatorWarningRound;
