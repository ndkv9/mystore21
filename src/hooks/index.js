import { useState, useEffect } from 'react'
import { getAllArticles } from '../services/articles'

export const useArticles = () => {
	const [articles, setArticles] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const articles = await getAllArticles()
				setArticles(articles)
			} catch (err) {
				// eslint-disable-next-line no-console
				console.log(err.message)
			}
		}

		fetchData()
	}, [])

	return articles
}

export const useSelection = () => {
	const [value, setValue] = useState('')

	const onChange = event => {
		setValue(event.target.value)
	}

	return [value, onChange]
}
