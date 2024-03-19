<template>
	<div ref="dropdownRef">
		<button
			@click="toggleDropdown"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center"
			type="button"
		>
			<svg
				class="w-6 h-6"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-width="2"
					d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
				/>
			</svg>
		</button>
		<div
			v-show="isDropdownVisible"
			class="z-10 w-auto bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
			style="position: absolute"
		>
			<ul class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200">
				<li
					v-for="manufacturer in uniqueManufactures"
					:key="manufacturer"
					class="flex items-center"
				>
					<input
						:id="`checkbox-item-${manufacturer}`"
						type="checkbox"
						@change="() => updateSelection(manufacturer)"
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
					/>
					<label
						:for="`checkbox-item-${manufacturer}`"
						class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>{{ manufacturer }}</label
					>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const emit = defineEmits(['update:selectedManufacturers'])
const props = defineProps({
	products: Object,
})

const selectedManufacturers = ref([])

const updateSelection = manufacturer => {
	if (selectedManufacturers.value.includes(manufacturer)) {
		selectedManufacturers.value = selectedManufacturers.value.filter(
			m => m !== manufacturer
		)
	} else {
		selectedManufacturers.value.push(manufacturer)
	}
	emit('update:selectedManufacturers', selectedManufacturers.value)
}

const uniqueManufactures = computed(() => {
	const manufacturers = new Set(
		props.products.map(product => product.manifacturor)
	)
	return [...manufacturers]
})

const dropdownRef = ref(null)
const isDropdownVisible = ref(false)

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
