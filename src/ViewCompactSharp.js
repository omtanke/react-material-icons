function SvgViewCompactSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z' />
		</svg>
	);
}

export default SvgViewCompactSharp;
