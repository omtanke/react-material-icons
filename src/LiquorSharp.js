import * as React from 'react';

function SvgLiquorSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M3 14c0 1.3.84 2.4 2 2.82V20H3v2h6v-2H7v-3.18C8.16 16.4 9 15.3 9 14V6H3v8zm2-6h2v3H5V8zM22 9l-3-1.01V2h-5v6l-3 1.01V22h11V9zm-6-5h1v1h-1V4zm-3 6.44l3-.98V7h1v2.46l3 .98V12h-7v-1.56zM20 20h-7v-2h7v2z' />
		</svg>
	);
}

export default SvgLiquorSharp;
