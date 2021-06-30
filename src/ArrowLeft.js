function SvgArrowLeft(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M14 7l-5 5 5 5V7z' />
			<path d='M24 0v24H0V0h24z' fill='none' />
		</svg>
	);
}

export default SvgArrowLeft;
