function SvgNorthRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M5.71 9.7c.39.39 1.02.39 1.41 0L11 5.83V21c0 .55.45 1 1 1s1-.45 1-1V5.83l3.88 3.88a.996.996 0 101.41-1.41L12.7 2.7a.996.996 0 00-1.41 0L5.71 8.29a.996.996 0 000 1.41z' />
		</svg>
	);
}

export default SvgNorthRound;
