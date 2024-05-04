<script setup>
import CardItem from '@/components/card/CardItem.vue'
import Search from '@/components/Search.vue'
import { getProducts } from '@/config/api'
import { useEventListener } from '@vueuse/core'
import { onMounted, ref } from 'vue'

useEventListener(document, 'scroll', () => {
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
		const currentLength = displayedProducts.value.length
		if (currentLength < products.value.length) {
			const nextProducts = products.value.slice(
				currentLength,
				currentLength + itemsPerPage
			)
			displayedProducts.value = [...displayedProducts.value, ...nextProducts]
		}
	}
})

const products = ref([])
const displayedProducts = ref([])
const itemsPerPage = 12

onMounted(async () => {
	products.value = await getProducts()
	updateDisplayedProducts()
})

const updateDisplayedProducts = () => {
	displayedProducts.value = products.value.slice(0, itemsPerPage)
}
</script>

<template>
	<div class="px-2">
		<Search />
		<div class="grid grid-cols-2 gap-[20px] sm:grid-cols-3 lg:grid-cols-6">
			<CardItem
				v-for="product in displayedProducts"
				:key="product.id"
				:product="product"
			></CardItem>
		</div>
	</div>
</template>
