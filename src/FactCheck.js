import * as React from 'react';

function SvgFactCheck(props) {
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
				d='M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM10 17H5v-2h5v2zm0-4H5v-2h5v2zm0-4H5V7h5v2zm4.82 6L12 12.16l1.41-1.41 1.41 1.42L17.99 9l1.42 1.42L14.82 15z'
				fillRule='evenodd'
			/>
		</svg>
	);
}

export default SvgFactCheck;
