import * as React from 'react';

function SvgMonitorRound(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3c-.55.55-1 .87-1 1.59 0 .78.63 1.41 1.41 1.41h9.17c.78 0 1.41-.63 1.41-1.41 0-.72-.44-1.03-1-1.59h3c1.1 0 2-.9 2-2V5C22 3.9 21.1 3 20 3zm0 13H4V5h16v11z' />
		</svg>
	);
}

export default SvgMonitorRound;
