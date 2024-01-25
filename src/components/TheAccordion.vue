<template>
	<fwb-accordion>
		<fwb-accordion-panel v-for="category in uniqueCategories" :key="category">
			<fwb-accordion-header>{{ category }}</fwb-accordion-header>
			<fwb-accordion-content
				v-for="product in filteredProducts(category)"
				:key="product.subcategory"
			>
				<router-link to="/">
					<div class="flex gap-1">
						<img
							class="mb-2"
							src="/images/apple.png"
							width="24"
							height="24"
							alt="product.subcategory"
						/>
						<p class="mb-2 text-gray-500 dark:text-gray-400">
							{{ product.subcategory }}
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

const products = [
	{
		category: 'Семена овощей',
		subcategory: 'Семена томата',
		title: 'Ольга F1',
		description: 'тут какой то текст',
		priceWholesale: 9500,
		priceRetail: 9000,
		manufacturer: 'Vilmorin - Франция',
		packaging: '1000 семян',
		image: '/images/tomatoes.jpg',
	},
	{
		category: 'Семена овощей',
		subcategory: 'Семена огурца',
		title: 'Вар F1',
		description: 'тут какой то текст',
		priceWholesale: 92500,
		priceRetail: 1000,
		manufacturer: 'Vilmorin - Франция',
		packaging: '1000 семян',
		image: '/images/cucumber.jpg',
	},
	{
		category: 'Семена кормовых',
		subcategory: 'Семена кормовой кукурузы',
		title: 'Алтын 739',
		description: 'Для производства зерна и силоса',
		priceWholesale: 43800,
		priceRetail: 45000,
		manufacturer: 'Будан - Казахстан',
		packaging: '1000 семян',
		image: '/images/cucumber.jpg',
	},
]

const uniqueCategories = [...new Set(products.map(product => product.category))]
const filteredProducts = category => {
	return products.filter(product => product.category === category)
}
</script>
