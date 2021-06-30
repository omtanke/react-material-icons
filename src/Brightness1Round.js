function SvgBrightness1Round(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<circle cx={12} cy={12} r={10} />
		</svg>
	);
}

export default SvgBrightness1Round;
