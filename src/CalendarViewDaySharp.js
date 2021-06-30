function SvgCalendarViewDaySharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M3 17h18v2H3v-2zm0-7h18v5H3v-5zm0-4h18v2H3V6z' />
		</svg>
	);
}

export default SvgCalendarViewDaySharp;
