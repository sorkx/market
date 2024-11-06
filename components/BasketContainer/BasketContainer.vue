<script setup>
import { useCartStore } from '~/store/cart'

const cart = useCartStore()

const { itemWord } = useItemWord(cart)

const items = computed(() =>
	cart.items.map(item => ({
		...item,
		originalPrice: item.price,
		price: item.price * item.quantity
	}))
)

const decreaseQuantity = (item) => {
	if (item.quantity > 1) {
		const newQuantity = item.quantity - 1
		cart.updateQuantity(item.id, newQuantity)
	} else {
		cart.removeFromCart(item.id)
	}
}

const increaseQuantity = (item) => {
	const newQuantity = item.quantity + 1
	cart.updateQuantity(item.id, newQuantity)
}

</script>

<template>
	<div class="basket-container">
		<div class="basket-header">
			<div class="basket-header__title">
				<h2>Ваша корзина</h2>
				<div class="basket-header__count">
					{{ cart.totalItems() }} {{ itemWord }}
				</div>
			</div>
			<div class="basket-header__clear">
				<VButton
					appearance="text"
					size="normal"
					@click="cart.clearCart()"
					class="clear"
				>
					Очистить корзину
				</VButton>
			</div>
		</div>
		<div class="basket-grid">
			<div class="basket-products">
				<CartProductCard 
					v-for="item in items"
					:key="item.title"
					:item="item"
					@remove="cart.removeFromCart(item.id)"
					@decrease="decreaseQuantity(item)"
					@increase="increaseQuantity(item)"
				/>
			</div>
			<BasketTotal 
				class="basket-aside"
				:sum-poducts="cart.totalAmout()"
				:count-product="cart.totalItems()" 
			/>
		</div>
		<div class="basket-footer">
			<div class="basket-footer__install">
				<input 
					type="checkbox"
					v-model="cart.isInstallationNeeded"
				/>
				<img src="/_nuxt/assets/images/install.png"/>
				<div class="basket-footer__install-text">
					<span>
						Установка
					</span>
					<span>
						Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.
					</span>
				</div>
			</div>
		</div>
	</div>
	<ViewedProducts />
</template>

<style src="./styles.scss" lang="scss" scoped />