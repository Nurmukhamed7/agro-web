import axios from 'axios'

const api = axios.create({
	baseURL: 'http://185.129.49.235',
})
// использовать  вместо trycatch в interceptors

export const getCategories = async () => {
	try {
		const response = await api.get('/api/category/')
		console.log(response.data)
		return response.data
	} catch (error) {
		console.error(
			'Error fetching categories:',
			error.response ? error.response.data : error.message
		)

		return null
	}
}

// getSubcategories тут будет getPorudctsBySubId тоже самое только без params
export const getProducts = async id => {
	try {
		const response = await api.get('/api/product/', {
			params: {
				subcategory: id,
			},
		})
		console.log(response.data)
		return response.data
	} catch (error) {
		console.error(
			'Error fetching subcategories:',
			error.response ? error.response.data : error.message
		)

		return null
	}
}

export const getProductByID = async id => {
	try {
		const response = await api.get(`/api/product/${id}`)
		console.log(response.data)
		return response.data
	} catch (error) {
		console.error(
			'Error fetching subcategories:',
			error.response ? error.response.data : error.message
		)

		return null
	}
}

export default api
