<script setup>
import CardItem from '@/components/card/CardItem.vue'
import FilterList from '@/components/filters/FilterList.vue'
import Search from '@/components/Search.vue'
import { getProductsBySubId } from '@/config/api'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const products = ref([])
const selectedManufacturers = ref([])

const filteredProducts = computed(() => {
	if (selectedManufacturers.value.length > 0) {
		return products.value.filter(product =>
			selectedManufacturers.value.includes(product.manifacturor)
		)
	}
	return products.value
})

const route = useRoute()

onMounted(async () => {
	products.value = await getProductsBySubId(+route.params.id)
})
</script>

<template>
	<div class="px-2">
		<Search />
		<FilterList
			:products="products"
			@update:selectedManufacturers="selectedManufacturers = $event"
		/>

		<div class="grid grid-cols-2 gap-[20px] sm:grid-cols-3 lg:grid-cols-6">
			<CardItem
				v-for="product in filteredProducts"
				:key="product.id"
				:product="product"
			></CardItem>
		</div>
	</div>
</template>

<style scoped></style>
