import * as React from 'react';

function SvgSnippetFolder(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M15.88 10.5l1.62 1.62v3.38h-3v-5h1.38zM22 8v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2l.01-12c0-1.1.89-2 1.99-2h6l2 2h8c1.1 0 2 .9 2 2zm-3 3.5L16.5 9H13v8h6v-5.5z' />
		</svg>
	);
}

export default SvgSnippetFolder;
