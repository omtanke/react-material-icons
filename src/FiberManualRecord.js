import * as React from 'react';

function SvgFiberManualRecord(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M24 24H0V0h24v24z' fill='none' />
			<circle cx={12} cy={12} r={8} />
		</svg>
	);
}

export default SvgFiberManualRecord;
