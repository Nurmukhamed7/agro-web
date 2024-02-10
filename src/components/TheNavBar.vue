<template>
	<fwb-navbar>
		<template #logo>
			<fwb-navbar-logo
				alt="Flowbite logo"
				image-url="https://flowbite.com/docs/images/logo.svg"
				to="/"
				component="router-link"
			>
				Flowbite
			</fwb-navbar-logo>
		</template>
		<template #default="{ isShowMenu }">
			<fwb-navbar-collapse :is-show-menu="isShowMenu">
				<li>
					<router-link
						to="/"
						class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
						aria-current="page"
						>Home</router-link
					>
				</li>
				<li>
					<router-link
						to="/categories"
						class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						>Categories</router-link
					>
				</li>
				<li>
					<router-link
						to="/subcategories"
						class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						>Subcategories</router-link
					>
				</li>
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
