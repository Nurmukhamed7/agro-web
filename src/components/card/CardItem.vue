<template>
	<div class="basis-3/12 rounded-[12px] px-[8px] pb-[20px] pt-[8px] shadow-xl">
		<div class="flex flex-col gap-[16px] relative">
			<router-link
				:to="`/${slug ? slug : route.params.slug}/${
					props.product.subcategory
				}/${props.product.id}`"
				class="absolute inset-0"
			>
			</router-link>
			<img
				:src="props.product.photo"
				:alt="props.product.name"
				class="w-full rounded-[12px] object-contain object-center"
			/>
			<div class="flex flex-col gap-[4px] px-[8px]">
				<p class="text-head28m text-blue-700">
					{{ props.product.price }}
				</p>
				<h2 class="text-neutral-100 text-body16b">{{ props.product.name }}</h2>
				<div class="flex flex-col gap-[10px] text-body12m text-neutral-60">
					<p class="truncate">{{ props.product.description }}</p>
					<p>
						Производитель:
						<strong class="font-[700]">{{ props.product.manifacturor }}</strong>
					</p>
				</div>
				<div class="flex flex-col gap-[4px]">
					<button
						@click="bucketStore.addToBucket(product)"
						class="w-full rounded-[8px] bg-blue-700 text-white px-[10px] py-[6px] z-10"
					>
						В корзину
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useBucketStore } from '@/stores/bucketStore'
import { useRoute } from 'vue-router'
const route = useRoute()
const props = defineProps({
	product: Object,
	slug: String,
})

const bucketStore = useBucketStore()
// console.log(props.product)
//TODO: text-overflow: elipsis
</script>

<style></style>
