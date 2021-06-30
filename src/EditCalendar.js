function SvgEditCalendar(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M12 22H5a2 2 0 01-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2v6h-2v-2H5v10h7v2zm10.13-5.01l.71-.71a.996.996 0 000-1.41l-.71-.71a.996.996 0 00-1.41 0l-.71.71 2.12 2.12zm-.71.71l-5.3 5.3H14v-2.12l5.3-5.3 2.12 2.12z' />
		</svg>
	);
}

export default SvgEditCalendar;
