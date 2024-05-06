<template>
	<div v-if="bucketStore.bucket.count > 0">
		<h2 class="mb-10 text-center text-head36b font-bold">Корзина</h2>
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
	<div v-else class="flex flex-col items-center mt-10">
		<h2 class="mb-10 text-head36b font-bold">Ваша корзина пустая</h2>
		<router-link class="text-blue-500" to="/all-products">
			<p class="justify-center underline text-head24b">Вернуться к покупкам</p>
		</router-link>
	</div>
</template>

<script setup>
import BucketItem from '@/components/bucket/BucketItem.vue'
import { sendBucketProduct } from '@/config/api'
import { useBucketStore } from '@/stores/bucketStore'
import { FwbInput, FwbSpinner } from 'flowbite-vue'
import { vMaska } from 'maska'
import { ref } from 'vue'

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
		isShowSpinner.value = false
		alert(`${response.name}, Ваш заказ успешно отправлен!`)
		bucketStore.clearBucket()
	} catch (error) {
		isShowSpinner.value = false
	} finally {
	}
}
</script>

<style scoped></style>
