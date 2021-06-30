import * as React from 'react';

function SvgHomeFilled(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0z' fill='none' />
			<path d='M12 3L4 9v12h5v-7h6v7h5V9z' />
		</svg>
	);
}

export default SvgHomeFilled;
