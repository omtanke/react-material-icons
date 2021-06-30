import * as React from 'react';

function SvgArrowLeftRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M24 0v24H0V0h24z' fill='none' opacity={0.87} />
			<path d='M12.29 8.71L9.7 11.3a.996.996 0 000 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7z' />
		</svg>
	);
}

export default SvgArrowLeftRound;
