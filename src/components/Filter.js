import React from 'react'

const Filter = ({ filter, setFilter }) => {
	return (
		<div>
			<input
				type='checkbox'
				id='filter'
				name='filter'
				checked={filter}
				onChange={() => setFilter(!filter)}
			/>
			<label className='filter_texts' htmlFor='filter'>
				CHEAPER THAN 50KR
			</label>
		</div>
	)
}

export default Filter
