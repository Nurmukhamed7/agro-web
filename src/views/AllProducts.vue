<script setup>
import { onMounted, ref } from 'vue'
import CardItem from '@/components/card/CardItem.vue'
import { getProducts } from '@/config/api'
import Search from '@/components/Search.vue'

const products = ref([])

onMounted(async () => {
	products.value = await getProducts()
})
</script>

<template>
	<div class="px-2">
		<Search />
		<div class="grid grid-cols-2 gap-[20px] sm:grid-cols-3 lg:grid-cols-6">
			<CardItem
				v-for="product in products"
				:key="product.id"
				:product="product"
			></CardItem>
		</div>
	</div>
</template>

<style scoped></style>
