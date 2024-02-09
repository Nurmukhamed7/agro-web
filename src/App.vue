<script setup>
import TheNavBar from './components/TheNavBar.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
	<TheNavBar />
	<div class="container mx-auto">
		<RouterView />
	</div>
	<TheFooter />
</template>

<style scoped></style>
