<template>
	<div
		class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
	>
		<img
			src="https://kubnews.ru/upload/resize_cache/webp/iblock/651/800_533_2/wiz1gp7z1q7tsmcs3bfhrs6125plqjuv.webp"
			alt="product-image"
			class="w-full rounded-lg sm:w-40"
		/>
		<div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
			<div class="mt-5 sm:mt-0 flex flex-col justify-between">
				<h2 class="text-lg font-bold text-gray-900">Название товара</h2>
				<button
					class="w-full rounded-[8px] bg-red-700 text-white px-[10px] py-[6px] z-10"
				>
					Удалить товар
				</button>
			</div>
			<div
				class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"
			>
				<div class="flex items-center border-gray-100">
					<form class="max-w-xs mx-auto">
						<label
							for="counter-input"
							class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
							>Количество:</label
						>
						<div class="relative flex items-center">
							<button
								type="button"
								id="decrement-button"
								data-input-counter-decrement="counter-input"
								class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
							>
								<svg
									class="w-2.5 h-2.5 text-gray-900 dark:text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 18 2"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M1 1h16"
									/>
								</svg>
							</button>
							<input
								type="text"
								id="counter-input"
								data-input-counter
								class="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
								placeholder=""
								value="12"
								required
							/>
							<button
								type="button"
								id="increment-button"
								data-input-counter-increment="counter-input"
								class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
							>
								<svg
									class="w-2.5 h-2.5 text-gray-900 dark:text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 18 18"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 1v16M1 9h16"
									/>
								</svg>
							</button>
						</div>
					</form>
				</div>
				<div class="flex items-center space-x-4">
					<p class="text-sm">25.000 тг.</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
