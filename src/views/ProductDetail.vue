<template>
	<section class="m-auto max-w-1180 lg:px-[16px] xl:px-0">
		<div class="px-2 text-body16b lg:mb-[18px] lg:justify-start">
			<router-link
				to="/subcategories"
				class="rounded-[8px] bg-blue-700 text-white px-[10px] py-[6px]"
			>
				Вернуться к товарам
			</router-link>
		</div>
		<section
			class="product flex flex-col gap-[20px] rounded-[20px] lg:flex-row lg:gap-[34px] lg:border lg:border-neutral-10 lg:px-[20px] lg:py-[22px] mb-10"
		>
			<div class="lg:w-1/2 lg:grow-0 p-4">
				<img
					src="https://kubnews.ru/upload/resize_cache/webp/iblock/651/800_533_2/wiz1gp7z1q7tsmcs3bfhrs6125plqjuv.webp"
					alt="product.title"
					class="w-full rounded-[12px] object-contain object-center"
				/>
			</div>
			<div
				class="right relative rounded-tl-[20px] rounded-tr-[20px] px-[16px] py-[20px] shadow-product-page before:absolute before:left-1/2 before:top-[10px] before:h-[6px] before:w-[40px] before:translate-x-[-50%] before:rounded-[10px] before:bg-neutral-20 lg:w-1/2 lg:pl-0 lg:pt-0 lg:shadow-none lg:before:hidden"
			>
				<h1 class="mt-[8px] text-head24b text-neutral-100">Воловье Сердце</h1>
				<div class="flex mt-[2px] text-body20b text-neutral-80">
					5 225 тг. (Оптом: 4000 тг.)
				</div>
				<div
					class="mt-[16px] flex flex-wrap gap-[16px] text-body16b lg:mb-[18px] lg:justify-start"
				>
					<button
						class="w-desktop rounded-[8px] bg-blue-700 text-white px-[10px] py-[6px]"
					>
						В корзину
					</button>
				</div>
				<div
					class="mb-[15px] mt-[25px] flex items-center justify-between lg:hidden"
				>
					<div class="text-[18px] font-bold text-neutral-100">О продукте</div>
				</div>
				<div class="text-body14m text-neutral-60">
					<div
						class="grid grid-cols-2 border-b border-neutral-10 px-[11px] py-[12px]"
					>
						<div>Производитель</div>
						<div>: Франция</div>
					</div>
					<div
						class="grid grid-cols-2 border-b border-neutral-10 px-[11px] py-[12px]"
					>
						<div>Фасовка</div>
						<div>: 1000 семян</div>
					</div>
					<div
						class="grid grid-cols-2 border-b border-neutral-10 px-[11px] py-[12px]"
					>
						<div>Описание</div>
						<div>
							: Ольга F1 / Olga F1 - Среднеранний гибрид с красивыми однородными
							плодами темно-красного цвета и отличными вкусовыми качествами.
							Большой процент плодов, однородных по размеру и форме. Плод
							выровненный, плотный, подходит для транспортировки. Отличные
							вкусовые качества. Хорошая облиственность и завязываемость при
							высоких и низких температурах. Возделывается так же, как
							полудетерминантный. Вес плода: 170–190 г и более. Устойчивость HR:
							вертициллез (V): 0; фузариоз (Fol): 0, 1; серая пятнистость
							листьев (Ss)
						</div>
					</div>
					<div
						class="grid grid-cols-2 border-b border-neutral-10 px-[11px] py-[12px]"
					>
						<div>Доп информация</div>
						<div>: описание к доп информации</div>
					</div>
				</div>
			</div>
		</section>
	</section>
</template>

<script setup></script>
