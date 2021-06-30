function SvgSlideshowSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M10 8v8l5-4-5-4zm11-5H3v18h18V3zm-2 16H5V5h14v14z' />
		</svg>
	);
}

export default SvgSlideshowSharp;
