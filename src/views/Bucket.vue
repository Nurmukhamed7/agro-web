<template>
	<div v-if="bucketStore.bucket.count > 0">
		<div class="">
			<h1 class="mb-10 text-center text-head36b font-bold">Корзина</h1>
			<div
				class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
			>
				<div class="rounded-lg md:w-2/3">
					<BucketItem
						v-for="product in bucketStore.bucket.items"
						:key="product.id"
						:product="product"
					/>
				</div>
				<!-- Sub total -->
				<div
					class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3"
				>
					<div class="mb-2 flex justify-between">
						<fwb-input
							type="name"
							v-model="clientName"
							placeholder="Иван"
							label="Ваше имя"
						/>
					</div>
					<div class="mb-2 flex justify-between">
						<fwb-input
							type="text"
							v-model="clientPhone"
							placeholder="701 777 77 77"
							label="Ваш номер телефона"
							v-maska
							data-maska="+7 ### ### ## ##"
						/>
					</div>
					<div class="mb-2 flex justify-between">
						<p class="text-gray-700">Всего товаров:</p>
						<p class="text-gray-700">{{ bucketStore.bucketTotalCount }} шт.</p>
					</div>
					<hr class="my-4" />
					<div class="flex justify-between">
						<p class="text-lg font-bold">Итого</p>
						<div class="">
							<p class="mb-1 text-lg font-bold">
								{{ bucketStore.bucketTotalPrice }} тг.
							</p>
						</div>
					</div>
					<div v-if="isShowSpinner" class="flex justify-center">
						<fwb-spinner size="10" />
					</div>
					<button
						v-else
						@click="submitOrder"
						class="mt-6 w-full rounded-md bg-blue-600 py-1.5 font-medium text-blue-50 hover:bg-blue-500"
					>
						Заказать
					</button>
				</div>
			</div>
		</div>
	</div>
	<h1 v-else class="mb-10 text-center text-head36b font-bold">
		Ваша корзина пустая
	</h1>
</template>

<script setup>
import { FwbSpinner } from 'flowbite-vue'
import BucketItem from '@/components/bucket/BucketItem.vue'
import { FwbInput } from 'flowbite-vue'
import { useBucketStore } from '@/stores/bucketStore'
import { ref } from 'vue'
import { sendBucketProduct } from '@/config/api'
import { vMaska } from 'maska'

const bucketStore = useBucketStore()

const clientName = ref('')
const clientPhone = ref('')
const isShowSpinner = ref(false)

const createOrderData = () => {
	return {
		order_items: Object.values(bucketStore.bucket.items).map(
			({ item, count }) => ({
				product: item.id,
				quantity: count,
			})
		),
		name: clientName.value,
		phone: clientPhone.value,
	}
}

const submitOrder = async () => {
	const orderData = createOrderData()

	isShowSpinner.value = true
	try {
		const response = await sendBucketProduct(orderData)
		console.log('Order successful:', response.name)
		isShowSpinner.value = false
		alert(`${response.name}, Ваш заказ успешно отправлен!`)
		bucketStore.clearBucket()
	} catch (error) {
		isShowSpinner.value = false
		console.error('Order submission failed:', error)
	} finally {
	}
}
</script>

<style scoped></style>
