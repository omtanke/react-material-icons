function SvgViewDaySharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M2 21h19v-3H2v3zM21 8H2v8h19V8zM2 3v3h19V3H2z' />
		</svg>
	);
}

export default SvgViewDaySharp;
