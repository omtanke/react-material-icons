import * as React from 'react';

function SvgBookmarkRemove(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M21 7h-6V5h6v2zm-2 3.9A5.002 5.002 0 0114 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V10.9z' />
		</svg>
	);
}

export default SvgBookmarkRemove;
