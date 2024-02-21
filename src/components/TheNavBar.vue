<template>
	<nav
		class="border-gray-200 bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 sticky top-0 z-20 border-b"
	>
		<div class="container flex flex-wrap justify-between items-center mx-auto">
			<router-link to="/" class="flex items-center">
				<img
					src="/src/assets/corn.png"
					class="mr-3 h-6 sm:h-10"
					alt="AlmatyAgro"
				/>
				<span
					class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
					>AlmatyAgro</span
				>
			</router-link>
			<div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
				<button
					@click="goToBucket"
					type="button"
					class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
						/>
					</svg>

					<div
						v-if="bucketStore.bucketTotalCount > 0"
						class="absolute inline-flex items-center justify-center w-6 h-6 text-body14n text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900"
					>
						{{ bucketStore.bucketTotalCount }}
					</div>
				</button>
				<button
					@click="toggleMenu"
					type="button"
					class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-sticky"
					:aria-expanded="menuOpen.toString()"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
			</div>
			<div
				:class="{ hidden: !menuOpen, block: menuOpen }"
				class="w-full md:block md:w-auto"
				id="navbar-sticky"
			>
				<ul
					class="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
				>
					<li v-for="item in menuItems" :key="item.path">
						<router-link
							:to="item.path"
							@click="closeMenu"
							active-class="text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
							class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
							>{{ item.name }}</router-link
						>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<div class="fixed top-10 left-1/2 -translate-x-1/2 z-50 min-w-max">
		<Toast
			v-if="changedbucketTotalCount"
			message="Товар добавлен в корзину."
			type="success"
		></Toast>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useBucketStore } from '@/stores/bucketStore'
import Toast from '@/components/ui/Toast.vue'

const router = useRouter()

const menuItems = [
	{ name: 'Главная', path: '/' },
	{ name: 'Все товары', path: '/all-products' },
	{ name: 'Корзина', path: '/bucket' },
]

const menuOpen = ref(false)

const toggleMenu = () => {
	menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
	menuOpen.value = false
}

const goToBucket = () => {
	closeMenu()
	router.push('/bucket')
}

const bucketStore = useBucketStore()

const changedbucketTotalCount = ref(false)
watch(
	() => bucketStore.bucketTotalCount,
	(newCount, oldCount) => {
		if (newCount > oldCount) {
			triggerAnimation()
		}
	}
)

function triggerAnimation() {
	changedbucketTotalCount.value = true
	setTimeout(() => {
		changedbucketTotalCount.value = false
	}, 1500) // Сброс анимации через 0.5 секунды
}
</script>

<style scoped></style>
