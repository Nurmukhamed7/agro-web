<template>
	<div class="basis-3/12 rounded-[12px] px-[8px] pb-[20px] pt-[8px] shadow-xl">
		<div class="flex flex-col gap-[16px] relative">
			<router-link
				:to="`/${props.product.category_info.name}/${props.product.subcategory}/${props.product.id}`"
				class="absolute inset-0"
			>
			</router-link>
			<div class="h-32 md:h-48 overflow-hidden rounded-[12px]">
				<img
					:src="props.product.photo"
					:alt="props.product.name"
					class="w-full h-full object-cover object-center"
				/>
			</div>
			<div class="flex flex-col gap-[4px] px-[8px]">
				<p class="text-head28m text-blue-700">{{ props.product.price }} тг.</p>
				<h2 class="text-neutral-100 text-body16b">{{ props.product.name }}</h2>
				<div class="flex flex-col gap-[10px] text-body12m text-neutral-60">
					<p class="truncate">{{ props.product.description }}</p>
					<p class="truncate">
						Производитель:
						<strong class="font-[700]">{{ props.product.manifacturor }}</strong>
					</p>
				</div>
				<div class="flex flex-col gap-[4px]">
					<button
						@click="bucketStore.addToBucket(product)"
						class="w-full rounded-[8px] bg-blue-700 text-white px-[10px] py-[6px] z-10"
						:class="{ 'bg-red-700 ': props.product.count == 0 }"
						:disabled="props.product.count == 0"
					>
						{{ props.product.count == 0 ? 'Нет в наличии' : 'В корзину' }}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useBucketStore } from '@/stores/bucketStore'
const props = defineProps({
	product: Object,
})

const bucketStore = useBucketStore()
</script>

<style></style>
