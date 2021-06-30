import * as React from 'react';

function SvgSmartScreen(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-3 12H6V7h12v10z' />
			<path d='M15 11.25h1.5v1.5H15zM12.5 11.25H14v1.5h-1.5zM10 11.25h1.5v1.5H10zM7.5 11.25H9v1.5H7.5z' />
		</svg>
	);
}

export default SvgSmartScreen;
