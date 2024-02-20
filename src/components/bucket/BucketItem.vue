<template>
	<div
		class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
	>
		<div
			class="w-[279px] h-[251px] md:w-[230px] md:h-36 object-cover overflow-hidden rounded-lg"
		>
			<img
				:src="props.product.item.photo"
				alt="product-image"
				class="w-full rounded-lg sm:w-40 object-cover object-center"
			/>
		</div>
		<div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
			<div class="mt-5 sm:mt-0 flex flex-col justify-between">
				<h2 class="text-lg font-bold text-gray-900">
					{{ props.product.item.name }}
				</h2>
				<button
					@click="bucketStore.deleteItemFromBucket(props.product.item)"
					class="w-full rounded-[8px] bg-red-700 text-white px-[10px] py-[6px] z-10"
				>
					Удалить товар
				</button>
			</div>
			<div
				class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"
			>
				<div class="flex items-center border-gray-100">
					<form class="max-w-xs mx-auto">
						<label
							for="counter-input"
							class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
							>Количество:</label
						>
						<div class="relative flex items-center">
							<button
								@click="bucketStore.removeFromBucket(props.product.item)"
								type="button"
								id="decrement-button"
								data-input-counter-decrement="counter-input"
								class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
							>
								<svg
									class="w-2.5 h-2.5 text-gray-900 dark:text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 18 2"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M1 1h16"
									/>
								</svg>
							</button>
							<input
								type="text"
								id="counter-input"
								data-input-counter
								class="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
								placeholder=""
								:value="productCount"
								required
							/>
							<button
								@click="bucketStore.addToBucket(props.product.item)"
								type="button"
								id="increment-button"
								data-input-counter-increment="counter-input"
								class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
							>
								<svg
									class="w-2.5 h-2.5 text-gray-900 dark:text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 18 18"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 1v16M1 9h16"
									/>
								</svg>
							</button>
						</div>
					</form>
				</div>
				<div class="flex flex-col items-center space-x-4">
					<p class="text-sm">Розничная: {{ props.product.item.price }} тг.</p>
					<p class="text-sm">
						Оптовая: {{ props.product.item.discounted_price }} тг.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useBucketStore } from '@/stores/bucketStore'
import { computed } from 'vue'

const props = defineProps({
	product: Object,
})

const bucketStore = useBucketStore()

const productCount = computed(() => {
	const itemId = props.product.item.id
	return bucketStore.bucket.items[itemId]?.count || 0
})
</script>

<style lang="scss" scoped></style>
