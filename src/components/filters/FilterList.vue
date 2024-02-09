<template>
	<div ref="dropdownRef">
		<button
			@click="toggleDropdown"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			type="button"
		>
			Фильтр производителей
			<svg
				class="w-2.5 h-2.5 ms-3"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 10 6"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m1 1 4 4 4-4"
				/>
			</svg>
		</button>
		<div
			v-show="isDropdownVisible"
			class="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
			style="position: absolute"
		>
			<ul class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200">
				<li
					v-for="(item, index) in checkboxes"
					:key="index"
					class="flex items-center"
				>
					<input
						:id="`checkbox-item-${index}`"
						type="checkbox"
						v-model="item.checked"
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
					/>
					<label
						:for="`checkbox-item-${index}`"
						class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>{{ item.label }}</label
					>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const dropdownRef = ref(null)
const isDropdownVisible = ref(false)
const checkboxes = ref([
	{ label: 'производитель #1', checked: false },
	{ label: 'производитель #2', checked: true },
	{ label: 'производитель #3', checked: false },
])

function toggleDropdown() {
	isDropdownVisible.value = !isDropdownVisible.value
}

function handleClickOutside(event) {
	if (!dropdownRef.value.contains(event.target)) {
		isDropdownVisible.value = false
	}
}

onMounted(() => {
	window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
	window.removeEventListener('click', handleClickOutside)
})
</script>
