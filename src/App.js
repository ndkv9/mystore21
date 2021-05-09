import React, { useState, useEffect } from 'react'
import { getAllArticles } from './services/articles'
import ArticleList from './components/ArticleList'

const App = () => {
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

	return (
		<div id='wrapper'>
			<header id='header'>
				<h3>My Store</h3>
				<div>
					<input type='checkbox' id='filter' name='filter' />
					<label className='filter_texts' htmlFor='filter'>
						CHEAPER THAN 50KR
					</label>
				</div>
			</header>
			<main id='content'>
				<ArticleList articles={articles} />
			</main>
			<footer id='footer'>By Erik Vu Nguyen</footer>
		</div>
	)
}

export default App
