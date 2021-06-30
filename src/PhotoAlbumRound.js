import * as React from 'react';

function SvgPhotoAlbumRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm.63 14.19l1.99-2.56a.5.5 0 01.78-.01l1.74 2.1 2.6-3.34c.2-.26.6-.26.79.01l2.87 3.82a.5.5 0 01-.4.8H7.02c-.41-.01-.65-.49-.39-.82z' />
		</svg>
	);
}

export default SvgPhotoAlbumRound;
