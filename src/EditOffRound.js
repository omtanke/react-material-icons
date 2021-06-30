function SvgEditOffRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M2.1 3.51a.996.996 0 000 1.41l6.61 6.61-5.56 5.57c-.1.1-.15.22-.15.36v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15l5.56-5.56 6.61 6.61a.996.996 0 101.41-1.41L3.52 3.51c-.4-.39-1.03-.39-1.42 0zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83zM11.535 8.71l2.517-2.518L17.8 9.94l-2.517 2.517z' />
		</svg>
	);
}

export default SvgEditOffRound;
