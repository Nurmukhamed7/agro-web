<template>
	<div
		class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-neutral-80 rounded-lg shadow opacity-80 toast-animation"
	>
		<div
			:class="`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 ${iconColorClass} rounded-2xl`"
			v-html="iconSVG"
		></div>
		<div class="ms-3 text-sm font-normal text-white">
			{{ message }}
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
	message: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		default: 'success',
		required: true,
	},
})

const iconColorClass = computed(() => {
	switch (props.type) {
		case 'danger':
			return 'text-red-500 bg-red-100'
		case 'success':
			return 'text-green-500 bg-green-100'
		case 'warning':
			return 'text-yellow-400 bg-yellow-100'
	}
})

const iconSVG = computed(() => {
	switch (props.type) {
		case 'danger':
			return `<svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>`
		case 'success':
			return `<svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>`
		case 'warning':
			return `<svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
        </svg>`
	}
})
</script>

<style scoped>
@keyframes slideInDown {
	0% {
		transform: translateY(-100%); /* Старт анимации за пределами экрана */
		opacity: 0;
	}
	10%,
	90% {
		transform: translateY(0);
		opacity: 1;
	}
	100% {
		transform: translateY(
			-100%
		); /* Конец анимации, возвращение за пределы экрана */
		opacity: 0;
	}
}

.toast-animation {
	animation: slideInDown 3s ease-in-out forwards; /* Задаем анимацию с продолжительностью в 3 секунды */
}
</style>
