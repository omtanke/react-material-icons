import * as React from 'react';

function SvgUpcomingTwoTone(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M12 17c-2.04 0-3.81-1.24-4.58-3H4v5h16v-5h-3.42c-.77 1.76-2.54 3-4.58 3z'
				opacity={0.3}
			/>
			<path d='M21.16 7.26l-1.41-1.41-3.56 3.55 1.41 1.41s3.45-3.52 3.56-3.55zM11 3h2v5h-2zM20 12h-5c0 1.66-1.34 3-3 3s-3-1.34-3-3H4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm0 7H4v-5h3.42c.77 1.76 2.54 3 4.58 3s3.81-1.24 4.58-3H20v5zM6.4 10.81L7.81 9.4 4.26 5.84 2.84 7.26c.11.03 3.56 3.55 3.56 3.55z' />
		</svg>
	);
}

export default SvgUpcomingTwoTone;
