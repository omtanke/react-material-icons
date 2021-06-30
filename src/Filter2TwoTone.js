function SvgFilter2TwoTone(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M7 17h14V3H7v14zm4-6a2 2 0 012-2h2V7h-4V5h4a2 2 0 012 2v2a2 2 0 01-2 2h-2v2h4v2h-6v-4z'
				opacity={0.3}
			/>
			<path d='M17 13h-4v-2h2a2 2 0 002-2V7a2 2 0 00-2-2h-4v2h4v2h-2a2 2 0 00-2 2v4h6v-2zm4-12H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM1 21c0 1.1.9 2 2 2h16v-2H3V5H1v16z' />
		</svg>
	);
}

export default SvgFilter2TwoTone;
