<script setup>
import Search from '@/components/Search.vue'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getProducts } from '@/config/api'
import { useCategoryMap } from '@/hooks/useCategoryMap'
import CardItem from '@/components/card/CardItem.vue'

const route = useRoute()
const searchQuery = ref(route.query.query)
const filteredProducts = ref([])
const { initCategories, categoryMap } = useCategoryMap()

onMounted(async () => {
	initCategories()
})

const fetchProducts = async () => {
	const products = await getProducts()
	const queryLower = searchQuery.value.toLowerCase()
	filteredProducts.value = products.filter(
		product =>
			product.description.toLowerCase().includes(queryLower) ||
			product.name.toLowerCase().includes(queryLower) ||
			product.manifacturor.toLowerCase().includes(queryLower) ||
			(product.add_info && product.add_info.toLowerCase().includes(queryLower))
	)
}

watch(
	() => route.query.query,
	async newQuery => {
		searchQuery.value = newQuery
		await fetchProducts()
	},
	{ immediate: true }
)
</script>

<template>
	<div>
		<Search />
		<h1 class="mx-2">Результаты поиска для "{{ searchQuery }}"</h1>
		<div
			v-if="filteredProducts.length"
			class="grid grid-cols-2 gap-[20px] sm:grid-cols-3 lg:grid-cols-6"
		>
			<CardItem
				v-for="product in filteredProducts"
				:key="product.id"
				:product="product"
				:slug="categoryMap.get(product.subcategory)"
			></CardItem>
		</div>
		<p v-else>Ничего не найдено...</p>
	</div>
</template>
