import * as React from 'react';

function SvgMovingRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M2.7 17.29c.39.39 1.02.39 1.41 0L8.7 12.7a.996.996 0 011.41 0l1.17 1.17a3 3 0 004.24 0L19.7 9.7l1.44 1.44a.5.5 0 00.85-.35V6.5a.48.48 0 00-.49-.5h-4.29c-.45 0-.67.54-.35.85l1.44 1.44-4.17 4.17a.996.996 0 01-1.41 0l-1.17-1.17a3 3 0 00-4.24 0L2.7 15.88c-.38.39-.38 1.03 0 1.41z' />
		</svg>
	);
}

export default SvgMovingRound;
