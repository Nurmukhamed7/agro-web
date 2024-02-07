<template>
	<fwb-accordion class="my-4">
		<fwb-accordion-panel
			v-for="(subcategories, category) in allCategories"
			:key="category"
		>
			<fwb-accordion-header>{{ category }}</fwb-accordion-header>
			<fwb-accordion-content>
				<router-link to="/" v-for="(sub, indexSub) in subcategories" :key="sub">
					<div
						class="flex gap-1 pt-4"
						:class="{
							'border-b-2 py-4': indexSub !== subcategories.length - 1,
						}"
					>
						<img
							class="mb-2"
							src="/images/apple.png"
							width="24"
							height="24"
							alt="product"
						/>
						<p class="mb-2 text-gray-500 dark:text-gray-400">
							{{ sub }}
						</p>
					</div>
				</router-link>
			</fwb-accordion-content>
		</fwb-accordion-panel>
	</fwb-accordion>
</template>

<script setup>
import dataAgro from './../dataAgro'
import {
	FwbAccordion,
	FwbAccordionContent,
	FwbAccordionHeader,
	FwbAccordionPanel,
} from 'flowbite-vue'

const allCategories = dataAgro.reduce((acc, item) => {
	console.log(item.categories)
	if (!acc[item.categories]) {
		acc[item.categories] = new Set([item.subcategories])
	} else {
		acc[item.categories].add(item.subcategories)
	}

	return acc
}, {})

for (const category in allCategories) {
	allCategories[category] = Array.from(allCategories[category])
}
</script>
