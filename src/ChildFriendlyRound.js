import * as React from 'react';

function SvgChildFriendlyRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M13 3.08V10h8a8 8 0 00-6.86-7.92c-.6-.09-1.14.39-1.14 1zm6.32 12.81A7.948 7.948 0 0021 11H6.44l-.68-1.43a.993.993 0 00-.9-.57H3c-.55 0-1 .45-1 1s.45 1 1 1h1.22s1.89 4.07 2.12 4.42a3.505 3.505 0 00-1.74 3.94c.3 1.26 1.34 2.27 2.6 2.55 2.1.46 3.98-.96 4.25-2.91h2.08a3.498 3.498 0 004.22 2.92 3.493 3.493 0 002.63-2.53c.35-1.39-.14-2.68-1.06-3.5zM8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20zm9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20z' />
		</svg>
	);
}

export default SvgChildFriendlyRound;
