function SvgShortText(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M4 9h16v2H4V9zm0 4h10v2H4v-2z' />
		</svg>
	);
}

export default SvgShortText;
