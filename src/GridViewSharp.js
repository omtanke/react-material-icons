function SvgGridViewSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M3 3h8v8H3zM3 13h8v8H3zM13 3h8v8h-8zM13 13h8v8h-8z' />
		</svg>
	);
}

export default SvgGridViewSharp;
