import * as React from 'react';

function SvgAutoFixOffRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M22 3.55l-1.06-.49L20.45 2a.5.5 0 00-.91 0l-.49 1.06-1.05.49a.5.5 0 000 .91l1.06.49.49 1.05a.5.5 0 00.91 0l.49-1.06L22 4.45c.39-.17.39-.73 0-.9zM14.17 8.42l1.41 1.41-1.46 1.46 1.41 1.41 2.17-2.17a.996.996 0 000-1.41l-2.83-2.83a.996.996 0 00-1.41 0l-2.17 2.17 1.41 1.41 1.47-1.45zM2.1 4.93l6.36 6.36-6.17 6.17a.996.996 0 000 1.41l2.83 2.83c.39.39 1.02.39 1.41 0l6.17-6.17 6.36 6.36a.996.996 0 101.41-1.41L3.51 3.51a.996.996 0 00-1.41 0c-.39.4-.39 1.03 0 1.42z' />
		</svg>
	);
}

export default SvgAutoFixOffRound;
