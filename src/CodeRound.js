function SvgCodeRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M8.7 15.9L4.8 12l3.9-3.9a.984.984 0 000-1.4.984.984 0 00-1.4 0l-4.59 4.59a.996.996 0 000 1.41l4.59 4.6c.39.39 1.01.39 1.4 0a.984.984 0 000-1.4zm6.6 0l3.9-3.9-3.9-3.9a.984.984 0 010-1.4.984.984 0 011.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6a.984.984 0 01-1.4 0 .984.984 0 010-1.4z' />
		</svg>
	);
}

export default SvgCodeRound;
