<template>
	тут будут все товары
	<!-- <div class="px-2">
		<FilterList />
		<div class="grid grid-cols-2 gap-[20px] sm:grid-cols-3 lg:grid-cols-6">
			<CardItem
				v-for="product in products"
				:key="product.id"
				:product="product"
			></CardItem>
		</div>
	</div> -->
</template>

<script setup>
// import { onMounted, ref } from 'vue'
// import FilterList from '@/components/filters/FilterList.vue'
// import CardItem from '@/components/card/CardItem.vue'
// import { useBucketStore } from '@/stores/bucketStore'
// import { getProducts } from '@/config/api'
// import { useRoute } from 'vue-router'

// const products = ref([])

// const route = useRoute()

// onMounted(async () => {
// 	products.value = await getProducts(+route.params.id)
// })
</script>

<style scoped></style>
