<template>
	<fwb-accordion class="m-4">
		<fwb-accordion-panel v-for="category in data" :key="category.id">
			<fwb-accordion-header class="text-body18b">{{
				category.name
			}}</fwb-accordion-header>
			<fwb-accordion-content>
				<router-link
					:to="`/${category.name}/${subcategory.id}`"
					v-for="(subcategory, indexSub) in category.subcategories"
					:key="subcategory.id"
				>
					<div
						class="flex gap-1 pt-4"
						:class="{
							'border-b-2 py-4': indexSub !== category.subcategories.length - 1,
						}"
					>
						<p class="mb-2 text-gray-500 dark:text-gray-400">
							{{ subcategory.name }}
						</p>
					</div>
				</router-link>
			</fwb-accordion-content>
		</fwb-accordion-panel>
	</fwb-accordion>
</template>

<script setup>
import {
	FwbAccordion,
	FwbAccordionContent,
	FwbAccordionHeader,
	FwbAccordionPanel,
} from 'flowbite-vue'
import { getCategories } from '@/config/api'
import { onMounted, ref } from 'vue'

const data = ref([])
onMounted(async () => {
	data.value = await getCategories()
})
</script>
