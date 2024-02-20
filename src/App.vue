<script setup>
import TheNavBar from './components/TheNavBar.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
	<div class="flex flex-col min-h-screen">
		<TheNavBar />
		<div class="flex-grow container mx-auto">
			<RouterView />
		</div>
		<TheFooter />
	</div>
</template>

<style scoped></style>
