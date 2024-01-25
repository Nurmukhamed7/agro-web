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
			path: '/products',
			name: 'products',
			component: () => import('../views/ProductsView.vue'),
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
