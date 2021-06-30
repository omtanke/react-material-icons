function SvgFirstPageRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M24 0v24H0V0h24z' fill='none' opacity={0.87} />
			<path d='M17.7 15.89L13.82 12l3.89-3.89A.996.996 0 1016.3 6.7l-4.59 4.59a.996.996 0 000 1.41l4.59 4.59c.39.39 1.02.39 1.41 0a.993.993 0 00-.01-1.4zM7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z' />
		</svg>
	);
}

export default SvgFirstPageRound;
