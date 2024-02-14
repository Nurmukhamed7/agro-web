<script setup>
import { onMounted, ref } from 'vue'
import FilterList from '@/components/filters/FilterList.vue'
import SubcategoryItem from '@/components/card/SubcategoryItem.vue'
import { useBucketStore } from '@/stores/bucketStore'
import { getSubcategories } from '@/config/api'

const subcategories = ref([])

onMounted(async () => {
	const data = await getSubcategories()
	if (data) subcategories.value = data
})
</script>

<template>
	<div class="px-2">
		<FilterList />
		<div class="grid grid-cols-2 gap-[20px] sm:grid-cols-3 lg:grid-cols-6">
			<SubcategoryItem
				v-for="subcategory in subcategories"
				:key="subcategory.id"
				:type="'subcategory'"
				:imageUrl="subcategory.image"
				:name="subcategory.name"
				:price="subcategory.price"
				:description="subcategory.description"
				:manufacturer="subcategory.manufacturer"
			></SubcategoryItem>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
