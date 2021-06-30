function SvgCompassCalibrationSharp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<circle cx={12} cy={17} r={4} />
			<path d='M12 3C8.1 3 4.56 4.59 2 7.15l5 5a7.06 7.06 0 0110-.01l5-5C19.44 4.59 15.9 3 12 3z' />
		</svg>
	);
}

export default SvgCompassCalibrationSharp;
