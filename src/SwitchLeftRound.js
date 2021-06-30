import * as React from 'react';

function SvgSwitchLeftRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M8.5 8.62v6.76L5.12 12 8.5 8.62m-4.79 2.67a.996.996 0 000 1.41l4.59 4.59c.62.63 1.7.19 1.7-.7V7.41c0-.89-1.08-1.34-1.71-.71l-4.58 4.59zM14 7.41v9.17c0 .89 1.08 1.34 1.71.71l4.59-4.59a.996.996 0 000-1.41L15.71 6.7c-.63-.62-1.71-.18-1.71.71z' />
		</svg>
	);
}

export default SvgSwitchLeftRound;
