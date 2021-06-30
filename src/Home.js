function SvgHome(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0z' fill='none' />
			<path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
		</svg>
	);
}

export default SvgHome;
