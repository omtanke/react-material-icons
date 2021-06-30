import * as React from 'react';

function SvgMarkChatReadRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M18.05 19.29a.996.996 0 01-1.41 0l-2.12-2.12a.996.996 0 111.41-1.41l1.41 1.41 3.54-3.54a.996.996 0 111.41 1.41l-4.24 4.25zM12 17a6.995 6.995 0 0110-6.32V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v18l4-4h6c0-.17.01-.33.03-.5-.02-.17-.03-.33-.03-.5z' />
		</svg>
	);
}

export default SvgMarkChatReadRound;
