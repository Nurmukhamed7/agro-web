<script setup>
import { onMounted, ref, computed } from 'vue'
import FilterList from '@/components/filters/FilterList.vue'
import CardItem from '@/components/card/CardItem.vue'
import { useBucketStore } from '@/stores/bucketStore'
import { getProducts, getProductsBySubId } from '@/config/api'
import { useRoute } from 'vue-router'
import Search from '@/components/Search.vue'

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
		<div class="flex items-center gap-1">
			<FilterList
				:products="products"
				@update:selectedManufacturers="selectedManufacturers = $event"
			/>
			<Search class="flex-grow" />
		</div>
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
