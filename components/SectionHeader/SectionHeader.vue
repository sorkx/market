<script setup>
import { useCartStore } from '~/store/cart'

const cart = useCartStore()

const { itemWord } = useItemWord(cart)

const props = defineProps({
	countProduct: {
		type: [String, Number],
		default: '',
	},
	sumPoducts: {
		type: [String, Number],
		default: '',
	}
})
</script>

<template>
	<header class="header container">
		<div class="header__container">
			<div class="basket">
				<div class="bakset__left">
					<IconsIconBasket />
				</div>
				<div class="basket__right">
					<span class="basket__title">
						Ваша корзина
					</span>
					<span class="basket__count">
						{{ cart.totalItems() }} {{ itemWord }}
					</span>
					<span class="basket__sum">
						{{ cart.totalAmout() }} ₽
					</span>
				</div>
			</div>
		</div>
	</header>
</template>

<style src="./styles.scss" lang="scss" scoped />