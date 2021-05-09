import React from 'react'
import SVG from './SVG'

const Star = () => (
	<SVG viewBox='0 0 24 15'>
		<path
			fill='coral'
			fillRule='evenodd'
			d='M8 12.472l-4.027 2.412a.814.814 0 01-1.107-.262.777.777 0 01-.096-.595l1.095-4.501-3.584-3.01a.779.779 0 01-.087-1.114.81.81 0 01.547-.273l4.703-.37L7.257.487a.81.81 0 011.486 0l1.813 4.272 4.703.37a.794.794 0 01.738.85.785.785 0 01-.278.537l-3.584 3.01 1.095 4.501a.789.789 0 01-.597.951.819.819 0 01-.606-.094L8 12.472z'
			clipRule='evenodd'
		/>
		<path d='M0 0h24v14H0z' fill='none' />
	</SVG>
)

export default Star
