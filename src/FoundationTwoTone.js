import * as React from 'react';

function SvgFoundationTwoTone(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M7 15v-4.81l4-3.6V15H7zm6 0V6.59l4 3.6V15h-4z' opacity={0.3} />
			<path d='M19 12h3L12 3 2 12h3v3H3v2h2v3h2v-3h4v3h2v-3h4v3h2v-3h2v-2h-2v-3zM7 15v-4.81l4-3.6V15H7zm6 0V6.59l4 3.6V15h-4z' />
		</svg>
	);
}

export default SvgFoundationTwoTone;
