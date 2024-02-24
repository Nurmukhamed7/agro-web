<template>
	<section class="m-auto max-w-1180 lg:px-[16px] xl:px-0">
		<div class="px-2 text-body16b lg:mb-[18px] lg:justify-start mt-3">
			<button
				class="rounded-[8px] bg-blue-700 text-white px-[10px] py-[6px]"
				@click="goBack"
			>
				Вернуться к товарам
			</button>
		</div>
		<section
			class="product flex flex-col gap-[20px] rounded-[20px] lg:flex-row lg:gap-[34px] lg:border lg:border-neutral-10 lg:px-[20px] lg:py-[22px] mb-10"
		>
			<div class="lg:w-1/2 lg:grow-0 p-4">
				<img
					:src="productDetail.photo"
					:alt="productDetail.name"
					class="w-full rounded-[12px] object-contain object-center"
				/>
			</div>
			<div
				class="right relative rounded-tl-[20px] rounded-tr-[20px] px-[16px] py-[20px] shadow-product-page before:absolute before:left-1/2 before:top-[10px] before:h-[6px] before:w-[40px] before:translate-x-[-50%] before:rounded-[10px] before:bg-neutral-20 lg:w-1/2 lg:pl-0 lg:pt-0 lg:shadow-none lg:before:hidden"
			>
				<h1 class="mt-[8px] text-head24b text-neutral-100">
					{{ productDetail.name }}
				</h1>
				<div class="flex mt-[2px] text-body20b text-neutral-80">
					{{ productDetail.price }} тг. (Оптом:
					{{ productDetail.discounted_price }} тг.)
				</div>
				<div
					class="mt-[16px] flex flex-wrap gap-[16px] text-body16b lg:mb-[18px] lg:justify-start"
				>
					<button
						class="w-desktop rounded-[8px] bg-blue-700 text-white px-[10px] py-[6px]"
						@click="bucketStore.addToBucket(productDetail)"
						:class="{ 'bg-red-700 ': productDetail.count == 0 }"
						:disabled="productDetail.count == 0"
					>
						{{ productDetail.count == 0 ? 'Нет в наличии' : 'В корзину' }}
					</button>
				</div>
				<div
					class="mb-[15px] mt-[25px] flex items-center justify-between lg:hidden"
				>
					<div class="text-[18px] font-bold text-neutral-100">О продукте</div>
				</div>
				<div class="text-body14m text-neutral-60">
					<div class="flex flex-col border-b border-neutral-10 py-[12px]">
						<div><h3 class="font-bold">Производитель:</h3></div>
						<div>
							<p class="font-normal">{{ productDetail.manifacturor }}</p>
						</div>
					</div>
					<div class="flex flex-col border-b border-neutral-10 py-[12px]">
						<div><h3 class="font-bold">Краткое описание:</h3></div>
						<div>
							<p class="font-normal">{{ productDetail.description }}</p>
						</div>
					</div>
					<div class="flex flex-col border-b border-neutral-10 py-[12px]">
						<div>
							<h3 class="font-bold">Полное описание:</h3>
						</div>
						<div>
							<p class="font-normal">{{ productDetail.add_info }}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</section>
</template>

<script setup>
import { getProductByID } from '@/config/api'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBucketStore } from '@/stores/bucketStore'
const productDetail = ref([])

const route = useRoute()
const router = useRouter()

const id = +route.params.productId
onMounted(async () => {
	productDetail.value = await getProductByID(id)
})

const goBack = () => router.go(-1)

const bucketStore = useBucketStore()
</script>
