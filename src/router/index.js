import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
			children: [
				{
					path: 'subcategory/product',
					component: () => import('../components/Subcategory.vue'),
				},
			],
		},
		{
			path: '/:slug/:id',
			name: 'products',
			component: () => import('../views/ProductsView.vue'),
			props: true,
		},
		{
			path: '/:slug/:subId/:productId',
			name: 'product detail',
			component: () => import('../views/ProductDetail.vue'),
		},
		{
			path: '/bucket',
			name: 'bucket',
			component: () => import('../views/Bucket.vue'),
		},
		// {
		// 	path: '/all-products',
		// 	name: 'products',
		// 	component: () => import('../views/AllProducts.vue'),
		// },
		{
			path: '/search',
			name: 'search',
			component: () => import('../views/SearchView.vue'),
		},
		{
			path: '/:catchAll(.*)',
			name: 'not found',
			component: () => import('../views/NotFoundView.vue'),
		},
	],
})

export default router
