import * as React from 'react';

function SvgShower(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<circle cx={8} cy={17} r={1} />
			<circle cx={12} cy={17} r={1} />
			<circle cx={16} cy={17} r={1} />
			<path d='M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92z' />
			<circle cx={8} cy={20} r={1} />
			<circle cx={12} cy={20} r={1} />
			<circle cx={16} cy={20} r={1} />
		</svg>
	);
}

export default SvgShower;
