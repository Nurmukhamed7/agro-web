<template>
	<fwb-navbar>
		<template #logo>
			<fwb-navbar-logo
				alt="Flowbite logo"
				image-url="/images/regenerative.png"
				link="#"
			>
				Flowbite
			</fwb-navbar-logo>
		</template>
		<template #default="{ isShowMenu }">
			<fwb-navbar-collapse :is-show-menu="isShowMenu">
				<fwb-navbar-link is-active link="#"> Главная </fwb-navbar-link>
				<fwb-navbar-link link="#"> Товары </fwb-navbar-link>
				<fwb-navbar-link link="#"> Войти в систему </fwb-navbar-link>
			</fwb-navbar-collapse>
		</template>
	</fwb-navbar>
</template>

<script setup>
import {
	FwbNavbar,
	FwbNavbarCollapse,
	FwbNavbarLink,
	FwbNavbarLogo,
} from 'flowbite-vue'
</script>
