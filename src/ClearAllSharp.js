function SvgClearAllSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z' />
		</svg>
	);
}

export default SvgClearAllSharp;
