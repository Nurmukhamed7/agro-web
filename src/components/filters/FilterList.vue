<template>
	<div>
		<ul
			class="grid grid-cols-2 items-center md:grid-cols-5 md:px-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
		>
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

<style scoped>
.space-y-3 > :not([hidden]) ~ :not([hidden]) {
	margin-top: 0;
}
</style>
