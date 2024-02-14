<template>
	<div class="basis-3/12 rounded-[12px] px-[8px] pb-[20px] pt-[8px] shadow-xl">
		<div class="flex flex-col gap-[16px] relative">
			<router-link
				v-if="props.type === 'category'"
				to="/categories/product/1"
				class="absolute inset-0"
			>
			</router-link>
			<img
				:src="props.imageUrl"
				:alt="props.name"
				class="w-full rounded-[12px] object-contain object-center"
			/>
			<div class="flex flex-col gap-[4px] px-[8px]">
				<p
					v-if="props.type === 'subcategory'"
					class="text-head28m text-blue-700"
				>
					{{ props.price }}
				</p>
				<h2 class="text-neutral-100 text-body16b">{{ props.name }}</h2>
				<div
					v-if="props.type === 'subcategory'"
					class="flex flex-col gap-[10px] text-body12m text-neutral-60"
				>
					<p>{{ props.description }}</p>
					<p>
						Производитель:
						<strong class="font-[700]">{{ props.manufacturer }}</strong>
					</p>
				</div>
				<div
					v-if="props.type === 'subcategory'"
					class="flex flex-col gap-[4px]"
				>
					<button
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
// import { useBucketStore } from '@/stores/bucketStore'

const props = defineProps({
	type: String,
	imageUrl: String,
	price: String,
	name: String,
	description: String,
	manufacturer: String,
})

// const bucketStore = useBucketStore()
// console.log(bucketStore)
</script>

<style></style>
