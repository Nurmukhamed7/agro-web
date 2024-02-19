<script setup>
import { computed, onMounted, ref } from 'vue'
import FilterList from '@/components/filters/FilterList.vue'
import CardItem from '@/components/card/CardItem.vue'
import { useBucketStore } from '@/stores/bucketStore'
import { getProducts, getCategories } from '@/config/api'

const products = ref([])
const categories = ref([])

const categoryMap = computed(() => {
	const map = new Map()
	categories.value.forEach(category => {
		category.subcategories.forEach(subcategory => {
			map.set(subcategory.id, category.name)
		})
	})
	// console.log(map)
	return map
})

onMounted(async () => {
	categories.value = await getCategories()
	products.value = await getProducts()
})
</script>

<template>
	тут будут все товары
	<div class="px-2">
		<FilterList />
		<div class="grid grid-cols-2 gap-[20px] sm:grid-cols-3 lg:grid-cols-6">
			<CardItem
				v-for="product in products"
				:key="product.id"
				:product="product"
				:slug="categoryMap.get(product.subcategory)"
			></CardItem>
		</div>
	</div>
</template>

<style scoped></style>
