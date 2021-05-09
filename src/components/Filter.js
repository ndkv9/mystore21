import React from 'react'
import PropTypes from 'prop-types'

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
			<label className='header_texts' htmlFor='filter'>
				Cheaper than 50kr
			</label>
		</div>
	)
}

Filter.propTypes = {
	filter: PropTypes.bool.isRequired,
	setFilter: PropTypes.func.isRequired,
}

export default Filter
