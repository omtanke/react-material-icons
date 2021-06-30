function SvgAnimationTwoTone(props) {
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
				d='M5 12a5.002 5.002 0 007 7c-3.87 0-7-3.13-7-7zM15 4c-1.13 0-2.16.37-3 1 3.87.01 7 3.14 7 7a5.002 5.002 0 00-4-8z'
				opacity={0.3}
			/>
			<path
				d='M12 7c-.6 0-1.17.11-1.7.3-.19.53-.3 1.1-.3 1.7 0 2.76 2.24 5 5 5 .6 0 1.17-.11 1.7-.3.19-.53.3-1.1.3-1.7 0-2.76-2.24-5-5-5z'
				opacity={0.3}
			/>
			<path d='M8 9a5.002 5.002 0 007 7c-3.87-.01-7-3.14-7-7z' opacity={0.3} />
			<path d='M15 2c-2.71 0-5.05 1.54-6.22 3.78a7.062 7.062 0 00-3 3A7.014 7.014 0 002 15c0 3.87 3.13 7 7 7 2.71 0 5.05-1.54 6.22-3.78a7.062 7.062 0 003-3A7.014 7.014 0 0022 9c0-3.87-3.13-7-7-7zM9 20a5.002 5.002 0 01-4-8c0 3.87 3.13 7 7 7-.84.63-1.88 1-3 1zm3-3a5.002 5.002 0 01-4-8c0 3.86 3.13 6.99 7 7-.84.63-1.88 1-3 1zm4.7-3.3c-.53.19-1.1.3-1.7.3-2.76 0-5-2.24-5-5 0-.6.11-1.17.3-1.7.53-.19 1.1-.3 1.7-.3 2.76 0 5 2.24 5 5 0 .6-.11 1.17-.3 1.7zM19 12c0-3.86-3.13-6.99-7-7a5.002 5.002 0 017 7z' />
		</svg>
	);
}

export default SvgAnimationTwoTone;
