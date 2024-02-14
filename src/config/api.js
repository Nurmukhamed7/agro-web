import axios from 'axios'

const api = axios.create({
	baseURL: 'http://185.129.49.235',
})

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

// getSubcategories тут будет
export const getSubcategories = async () => {
	try {
		const response = await api.get('/api/subcategory/')
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
