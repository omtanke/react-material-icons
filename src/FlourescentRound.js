import * as React from 'react';

function SvgFlourescentRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M7 15h10c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2zM12 2c-.56 0-1 .45-1 1v1c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1zM19.79 5.3a.996.996 0 00-1.41 0l-.38.38a.996.996 0 101.41 1.41l.38-.38a.996.996 0 000-1.41zM12 22c.56 0 1-.45 1-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1c0 .55.45 1 1 1zM17.99 18.41l.38.39c.39.39 1.02.39 1.41 0l.01-.01a.996.996 0 000-1.41L19.4 17a.996.996 0 10-1.41 1.41zM6 5.69l-.39-.38A.996.996 0 104.2 6.72l.39.38c.39.39 1.02.39 1.41 0 .38-.39.38-1.03 0-1.41zM4.2 18.79c.39.4 1.03.4 1.42 0L6 18.4a.996.996 0 10-1.41-1.41l-.39.39a.996.996 0 000 1.41z' />
		</svg>
	);
}

export default SvgFlourescentRound;
