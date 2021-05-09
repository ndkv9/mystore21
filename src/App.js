import React, { useState } from 'react'
import { useArticles } from './hooks/index'
import ArticleList from './components/ArticleList'
import Filter from './components/Filter'
import Sort from './components/Sort'

const App = () => {
	const articles = useArticles()
	const [filter, setFilter] = useState(false)
	const [selection, setSelection] = useState('')

	const handleSelection = event => {
		setSelection(event.target.value)
	}

	return (
		<div id='wrapper'>
			<header id='header'>
				<h3>MY STORE</h3>
				<div className='filter_n_sort'>
					<Filter filter={filter} setFilter={setFilter} />
					<Sort handleSelection={handleSelection} />
				</div>
			</header>
			<main id='content'>
				<ArticleList
					articles={articles}
					filter={filter}
					selection={selection}
				/>
			</main>
			<footer id='footer'>
				© {new Date().getFullYear()}, Built with
				<a href='https://github.com/ndkv9/'> Erik Vu Nguyen </a>
			</footer>
		</div>
	)
}

export default App
