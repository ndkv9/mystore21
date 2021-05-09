import axios from 'axios'
const baseUrl = 'https://shop-bff.fyndiq.se/code-assignment/articles'

export const getAllArticles = async () => {
	const response = await axios.get(baseUrl)
	return response.data.articles
}
