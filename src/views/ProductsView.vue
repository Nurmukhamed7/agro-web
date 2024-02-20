<script setup>
import { onMounted, ref } from 'vue'
import FilterList from '@/components/filters/FilterList.vue'
import CardItem from '@/components/card/CardItem.vue'
import { useBucketStore } from '@/stores/bucketStore'
import { getProducts, getProductsBySubId } from '@/config/api'
import { useRoute } from 'vue-router'
import Search from '@/components/Search.vue'

const products = ref([])

const route = useRoute()

onMounted(async () => {
	console.log('ProductsView.vue:', route.params)
	products.value = await getProductsBySubId(+route.params.id)
})
</script>

<template>
	<div class="px-2">
		<!-- <FilterList /> -->
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
