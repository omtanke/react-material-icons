import * as React from 'react';

function SvgCategory(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0z' fill='none' />
			<path d='M12 2l-5.5 9h11z' />
			<circle cx={17.5} cy={17.5} r={4.5} />
			<path d='M3 13.5h8v8H3z' />
		</svg>
	);
}

export default SvgCategory;
