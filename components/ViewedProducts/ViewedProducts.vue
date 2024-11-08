<script setup>
import { useViewedProductsStore } from '~/store/viewed-products'

const {  viewedProducts } = useViewedProductsStore()

const formattedSumPoducts = computed(() => {
	return viewedProducts.map(item => {
		return {
			...item,
			price_from: item.price_from.toLocaleString('ru-RU'),
			price_to: item.price_to.toLocaleString('ru-RU'),
		}
	})
})
</script>

<template>
	<div class="viewed-products">
		<div class="viewed-products__title">
			<h2>
				Просмотренные товары
			</h2>
		</div>
		<RouletteSlider :items="formattedSumPoducts">
			<template #slide="{ item }">
					<ProductCard
						:key="item.id" 
						:item="item"
					/>
				</template>
		</RouletteSlider>
	</div>
</template>

<style src="./styles.scss" lang="scss" scoped />