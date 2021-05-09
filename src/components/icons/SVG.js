import React from 'react'

const SVG = ({ children, viewBox }) => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox={viewBox}>
		{children}
	</svg>
)

export default SVG
