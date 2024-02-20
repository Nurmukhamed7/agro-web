<template>
	<footer
		class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800"
	>
		<span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
			>© 2024
			<a href="https://flowbite.com/" class="hover:underline">AlmatyAgro™</a>.
			Все права защищены.
		</span>
		<ul
			class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
		>
			<li
				v-for="item in menuItems"
				:key="item.path"
				class="mr-4 md:mr-6 last:mr-0"
			>
				<router-link :to="item.path" class="hover:underline">{{
					item.name
				}}</router-link>
			</li>
		</ul>
	</footer>
</template>

<script setup>
const menuItems = [
	{ name: 'Главная', path: '/' },
	{ name: 'Все товары', path: '/all-products' },
	{ name: 'Корзина', path: '/bucket' },
]
</script>
