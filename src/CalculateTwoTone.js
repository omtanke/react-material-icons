function SvgCalculateTwoTone(props) {
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
				d='M5 19h14V5H5v14zm8.03-11.94L14.09 6l1.41 1.41L16.91 6l1.06 1.06-1.41 1.41 1.41 1.41-1.06 1.06-1.41-1.4-1.41 1.41-1.06-1.06 1.41-1.41-1.41-1.42zM13 13.25h5v1.5h-5v-1.5zm0 2.5h5v1.5h-5v-1.5zM6.25 7.72h5v1.5h-5v-1.5zM6 14.5h2v-2h1.5v2h2V16h-2v2H8v-2H6v-1.5z'
				opacity={0.3}
			/>
			<path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z' />
			<path d='M6.25 7.72h5v1.5h-5zM13 15.75h5v1.5h-5zM13 13.25h5v1.5h-5zM8 18h1.5v-2h2v-1.5h-2v-2H8v2H6V16h2zM14.09 10.95l1.41-1.41 1.41 1.41 1.06-1.06-1.41-1.42 1.41-1.41L16.91 6 15.5 7.41 14.09 6l-1.06 1.06 1.41 1.41-1.41 1.42z' />
		</svg>
	);
}

export default SvgCalculateTwoTone;
