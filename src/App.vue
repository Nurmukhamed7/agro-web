<script setup>
import TheFooter from './components/TheFooter.vue'
import TheNavBar from './components/TheNavBar.vue'
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
