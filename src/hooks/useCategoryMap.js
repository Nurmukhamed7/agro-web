// composables/useCategoryMap.js или utils/useCategoryMap.js
import { ref, computed } from 'vue'
import { getCategories } from '@/config/api'

export function useCategoryMap() {
	const categories = ref([])

	// Инициализируем категории
	const initCategories = async () => {
		categories.value = await getCategories()
	}

	// Создаем карту категорий
	const categoryMap = computed(() => {
		const map = new Map()
		categories.value.forEach(category => {
			category.subcategories.forEach(subcategory => {
				map.set(subcategory.id, category.name)
			})
		})
		return map
	})

	return { initCategories, categoryMap }
}
