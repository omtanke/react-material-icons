function SvgMargin(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0z' fill='none' />
			<path d='M3 3v18h18V3H3zm16 16H5V5h14v14zM11 7h2v2h-2zM7 7h2v2H7zm8 0h2v2h-2zm-8 4h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z' />
		</svg>
	);
}

export default SvgMargin;
