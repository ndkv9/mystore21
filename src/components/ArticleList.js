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

					<div className='rating'>
						<Icon icon={<Star />} size={24} />
						<span>{article.averageRating}</span>
					</div>
					<div className='delivery'>
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

const ArticleList = ({ articles }) => {
	return (
		<ul className='article_container'>
			{articles.map(a => (
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
}

export default ArticleList
