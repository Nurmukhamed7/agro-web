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
			path: '/categories',
			name: 'categories',
			component: () => import('../views/CategoriesView.vue'),
		},
		{
			path: '/subcategories',
			name: 'subcategories',
			component: () => import('../views/SubcategoriesView.vue'),
		},
		{
			path: '/subcategories/product/1',
			name: 'product detail',
			component: () => import('../views/ProductDetail.vue'),
		},
		{
			path: '/bucket',
			name: 'bucket',
			component: () => import('../views/Bucket.vue'),
		},
		{
			path: '/admin',
			name: 'admin',
			component: () => import('../views/AdminView.vue'),
		},
		{
			path: '/:catchAll(.*)',
			name: 'not found',
			component: () => import('../views/NotFoundView.vue'),
		},
	],
})

export default router
