import * as React from 'react';

function SvgRemoveDoneRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M4.14 2.69a.996.996 0 000 1.41l9.67 9.67-1.41 1.41-3.54-3.53a.996.996 0 10-1.41 1.41l4.24 4.24c.39.39 1.02.39 1.41 0l2.12-2.12 5.89 5.89a.996.996 0 101.41-1.41L5.55 2.69a.996.996 0 00-1.41 0zm13.91 9.67l4.24-4.24a.999.999 0 00-.01-1.42c-.39-.38-1.02-.38-1.41.01l-4.24 4.24 1.42 1.41zM16.64 6.7a.996.996 0 00-1.41 0l-1.42 1.42 1.41 1.41 1.42-1.42a.996.996 0 000-1.41zM1.79 13.06l4.95 4.95 1.41-1.41-4.95-4.95a.996.996 0 10-1.41 1.41z' />
		</svg>
	);
}

export default SvgRemoveDoneRound;
