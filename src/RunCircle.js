function SvgRunCircle(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.5 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.5 6c-.7 0-2.01-.54-2.91-1.76l-.41 2.35L14 14.03V18h-1v-3.58l-1.11-1.21-.52 2.64-3.77-.77.2-.98 2.78.57.96-4.89-1.54.57V12H9V9.65l3.28-1.21c.49-.18 1.03.06 1.26.53.83 1.7 2.05 2.03 2.46 2.03v1z' />
		</svg>
	);
}

export default SvgRunCircle;
