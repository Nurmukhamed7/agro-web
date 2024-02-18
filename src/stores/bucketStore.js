import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useBucketStore = defineStore('bucket', () => {
	const bucket = ref(
		useLocalStorage(
			'bucket',
			{
				count: 0,
				totalPrice: 0,
				items: {},
			},
			{
				serializer: {
					read: v => (v ? JSON.parse(v) : null),
					write: v => JSON.stringify(v),
				},
			}
		)
	)

	const bucketTotalCount = computed(() => bucket.value.count)
	const bucketTotalPrice = computed(() => bucket.value.totalPrice)
	function addToBucket(item) {
		if (item.id in bucket.value.items) {
			bucket.value.items[item.id].count += 1
		} else {
			bucket.value.items[item.id] = { item, count: 1 }
		}

		bucket.value.count += 1
		bucket.value.totalPrice += item.price || 0
	}

	// это для кнопки минус 1 продукт
	function removeFromBucket(item) {
		const itemCount = bucket.value.items[item.id].count
		if (itemCount === 1) {
			delete bucket.value.items[item.id]
		} else {
			bucket.value.items[item.id].count -= 1
		}

		bucket.value.count -= 1
		bucket.value.totalPrice -= item.price || 0
		console.log(bucket.value)
	}

	// создать полное удаление товара из корзины

	return {
		bucket,
		bucketTotalCount,
		bucketTotalPrice,
		addToBucket,
		removeFromBucket,
	}
})
// хранить для корзины Pinia
// pinia сохранятьв Loc St UseStorage
// при mounted достаю продукты
