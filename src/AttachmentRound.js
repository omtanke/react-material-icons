import * as React from 'react';

function SvgAttachmentRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M17.75 16H7.17c-2.09 0-3.95-1.53-4.15-3.61A3.998 3.998 0 017 8h12.36c1.31 0 2.5.94 2.63 2.24A2.5 2.5 0 0119.5 13H9c-.55 0-1-.45-1-1s.45-1 1-1h8.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H9.14c-1.31 0-2.5.94-2.63 2.24A2.5 2.5 0 009 14.5h10.33c2.09 0 3.95-1.53 4.15-3.61A3.993 3.993 0 0019.5 6.5H7.23c-2.87 0-5.44 2.1-5.71 4.96A5.505 5.505 0 007 17.5h10.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z' />
		</svg>
	);
}

export default SvgAttachmentRound;
