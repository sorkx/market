<script setup>
import { useCartStore } from '~/store/cart'

const cart = useCartStore()

const { itemWord } = useItemWord(cart)

const formattedSumPoducts = computed(() => {
	return cart.totalAmout().toLocaleString('ru-RU')
})
</script>

<template>
	<header class="header container">
		<div class="header__container">
			<div class="cart">
				<div class="bakset__left">
					<IconsIconCart />
				</div>
				<div class="cart__right">
					<span class="cart__title">
						Ваша корзина
					</span>
					<span class="cart__count">
						{{ cart.totalItems() }} {{ itemWord }}
					</span>
					<span class="cart__sum">
						{{ formattedSumPoducts }} ₽
					</span>
				</div>
			</div>
		</div>
	</header>
</template>

<style src="./styles.scss" lang="scss" scoped />