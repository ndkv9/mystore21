import React from 'react'
import Icon from './icons/Icon'
import Star from './icons/Star'
import Truck from './icons/Truck'
import PropTypes from 'prop-types'

const ArticleItem = ({ article }) => {
	return (
		<li className='article_item'>
			<article>
				<div className='article_img'>
					<img src={article.images[0].url} alt='ahihi' />
				</div>
				<div className='product_content'>
					{article.old_price ? (
						<div className='old_price'>
							{article.old_price.formatted}
						</div>
					) : (
						<div className='only'>Endast</div>
					)}
					<div className='price'>{article.price.formatted}</div>
					<div className='description'>{article.title}</div>
					<div className='index'>
						<Icon icon={<Star />} size={24} />
						<span>{article.averageRating}</span>
					</div>
					<div className='index'>
						<Icon icon={<Truck />} size={24} />
						<span>
							{article.shipping_time_min}-{article.shipping_time_max}
						</span>
					</div>
				</div>
			</article>
		</li>
	)
}

const ArticleList = ({ articles, filter, selection }) => {
	if (filter) {
		articles = articles.filter(a => a.price.amount < 50)
	}

	let handledArticles = articles
	let ArticlesToHandle = [...articles]

	switch (selection) {
		case 'cheapest':
			handledArticles = ArticlesToHandle.sort(
				(a, b) => a.price.amount - b.price.amount,
			)
			break
		case 'most expensive':
			handledArticles = ArticlesToHandle.sort(
				(a, b) => b.price.amount - a.price.amount,
			)
			break
		case 'most rating':
			handledArticles = ArticlesToHandle.sort(
				(a, b) => Number(b.averageRating) - Number(a.averageRating),
			)
			break
		case 'lowest rating':
			handledArticles = ArticlesToHandle.sort(
				(a, b) => Number(a.averageRating) - Number(b.averageRating),
			)
			break
		case 'most relevance':
			handledArticles = articles
			break
		default:
			break
	}

	return (
		<ul className='article_container'>
			{handledArticles.map(a => (
				<ArticleItem key={a.article_id} article={a} />
			))}
		</ul>
	)
}

ArticleItem.propTypes = {
	article: PropTypes.object.isRequired,
}

ArticleList.propTypes = {
	articles: PropTypes.array.isRequired,
	filter: PropTypes.bool.isRequired,
}

export default ArticleList
