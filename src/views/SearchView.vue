<template>
	<div>
		<Search />
		<h1>Результаты поиска для "{{ searchQuery }}"</h1>
		<!-- Здесь может быть реализация отображения результатов поиска, например, список товаров -->
		{{ route.query.query }}
		<SubcategoryItem
			v-for="(item, index) in searchResults"
			:key="index"
			:type="'subcategory'"
			:imageUrl="item.imageUrl"
			:name="item.name"
			:price="item.price"
			:description="item.description"
			:manufacturer="item.manufacturer"
		/>
	</div>
</template>

<script setup>
import Search from '@/components/Search.vue'
import SubcategoryItem from '@/components/card/SubcategoryItem.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const searchQuery = route.query.query

const searchResults = [
	{
		imageUrl: '...',
		name: '...',
		price: '...',
		description: '...',
		manufacturer: '...',
	},
	{
		imageUrl: '...',
		name: '...',
		price: '...',
		description: '...',
		manufacturer: '...',
	},
	{
		imageUrl: '...',
		name: '...',
		price: '...',
		description: '...',
		manufacturer: '...',
	},
]
</script>
