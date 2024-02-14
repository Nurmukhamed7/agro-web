<script setup>
import { onMounted, ref } from 'vue'
import CategoryItem from '@/components/card/CategoryItem.vue'
import { useBucketStore } from '@/stores/bucketStore'
import { getCategories } from '@/config/api'

const bucketStore = useBucketStore()

const categories = ref([])

onMounted(async () => {
	const data = await getCategories()
	if (data) categories.value = data
})
</script>

<template>
	<div class="px-2">
		<h2 class="text-blue-700 text-body20b mx-2 my-2">
			TODO:Тут надо вывести название категории
		</h2>
		<div class="grid grid-cols-2 gap-[20px] sm:grid-cols-3 lg:grid-cols-6">
			<CategoryItem
				v-for="category in categories"
				:key="category.id"
				:type="'category'"
				:imageUrl="category.image"
				:name="category.name"
			></CategoryItem>
		</div>
	</div>
</template>

<style></style>
