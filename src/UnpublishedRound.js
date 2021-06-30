import * as React from 'react';

function SvgUnpublishedRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M20.49 20.49L3.51 3.51A.996.996 0 102.1 4.92l1.56 1.56a9.944 9.944 0 00-1.59 6.7c.53 4.54 4.21 8.22 8.74 8.74 2.49.29 4.81-.34 6.7-1.59l1.56 1.56c.39.39 1.02.39 1.41 0 .4-.38.4-1.01.01-1.4zm-10.61-4.6l-2.83-2.83a.996.996 0 111.41-1.41l2.12 2.12.18-.18L12.17 15l-.88.88c-.39.4-1.02.4-1.41.01zm3.71-5.13l-7.1-7.1a9.944 9.944 0 016.7-1.59c4.54.53 8.22 4.21 8.74 8.74.29 2.49-.34 4.82-1.59 6.7L15 12.17l1.94-1.94a.996.996 0 10-1.41-1.41l-1.94 1.94z' />
		</svg>
	);
}

export default SvgUnpublishedRound;
