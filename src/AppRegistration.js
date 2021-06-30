import * as React from 'react';

function SvgAppRegistration(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M10 4h4v4h-4zM4 16h4v4H4zM4 10h4v4H4zM4 4h4v4H4zM14 12.42V10h-4v4h2.42zM20.88 11.29l-1.17-1.17a.41.41 0 00-.58 0l-.88.88L20 12.75l.88-.88a.41.41 0 000-.58zM11 18.25V20h1.75l6.67-6.67-1.75-1.75zM16 4h4v4h-4z' />
		</svg>
	);
}

export default SvgAppRegistration;
