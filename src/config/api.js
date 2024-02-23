import axios from 'axios'

const api = axios.create({
	baseURL: 'https://www.almatyagro.kz',
})

api.interceptors.response.use(
	response => {
		return response.data
	},
	error => {
		console.error(
			'API call error:',
			error.response ? error.response.data : error.message
		)
		return Promise.reject(error)
	}
)

export const getCategories = async () => {
	return api.get('/api/category/')
}

export const getProductsBySubId = async id => {
	return api.get(`/api/product/?subcategory_id=${id}`)
}

export const getProducts = async () => {
	return api.get('/api/product')
}

export const sendBucketProduct = async data => {
	return api.post('/api/order/', data)
}

export const getProductByID = async id => {
	return api.get(`/api/product/${id}`)
}

export default api
