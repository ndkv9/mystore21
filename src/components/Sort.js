import React from 'react'

const Sort = ({ handleSelection }) => {
	return (
		<>
			<label htmlFor='selections'>Sort by: </label>
			<select
				name='selections'
				id='selections'
				onChange={handleSelection}
			>
				<option value='most relevance'>Most relevance</option>
				<option value='cheapest'>Cheapest first</option>
				<option value='most expensive'>Most expensive first</option>
				<option value='most rating'>Most rating</option>
				<option value='lowest rating'>Lowest rating</option>
			</select>
		</>
	)
}

export default Sort
