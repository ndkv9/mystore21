import React, { useState, useEffect } from 'react'
import { getAllArticles } from './services/articles'
import ArticleList from './components/ArticleList'
import Filter from './components/Filter'
import Sort from './components/Sort'

const App = () => {
	const [articles, setArticles] = useState([])
	const [filter, setFilter] = useState(false)
	const [selection, setSelection] = useState('')

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

	const handleSelection = event => {
		setSelection(event.target.value)
	}

	return (
		<div id='wrapper'>
			<header id='header'>
				<h3>My Store</h3>
				<Filter filter={filter} setFilter={setFilter} />
				<Sort handleSelection={handleSelection} />
			</header>
			<main id='content'>
				<ArticleList
					articles={articles}
					filter={filter}
					selection={selection}
				/>
			</main>
			<footer id='footer'>By Erik Vu Nguyen</footer>
		</div>
	)
}

export default App
