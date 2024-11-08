<script setup>
import { useCartStore } from '~/store/cart'

const cart = useCartStore()

const { itemWord } = useItemWord(cart)

const items = computed(() =>
	cart.items.map(item => ({
		...item,
		originalPrice: item.price.toLocaleString('ru-RU'),
		price: (item.price * item.quantity).toLocaleString('ru-RU'),
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
	<div class="cart-container">
		<div class="cart-grid">
			<div class="cart-header">
				<div class="cart-header__title">
					<h2>Ваша корзина</h2>
					<div class="cart-header__count">
						{{ cart.totalItems() }} {{ itemWord }}
					</div>
				</div>
				<div class="cart-header__clear">
					<VButton
						data-appearance="text"
						data-size="normal"
						@click="cart.clearCart()"
						class="clear"
					>
						Очистить корзину
					</VButton>
				</div>
			</div>
			<div class="cart-products">
				<CartProductCard 
					v-for="item in items"
					:key="item.title"
					:item="item"
					@remove="cart.removeFromCart(item.id)"
					@decrease="decreaseQuantity(item)"
					@increase="increaseQuantity(item)"
				/>
			</div>
			<CartTotal 
				class="cart-aside"
				:sum-poducts="cart.totalAmout()"
				:count-products="cart.totalItems()" 
			/>
			<div class="cart-footer">
				<div class="cart-footer__install">
					<input 
						type="checkbox"
						v-model="cart.isInstallationNeeded"
					/>
					<VImage 
						src="/_nuxt/assets/images/install.png"
						loading="eager"
						alt="install"

					/>
					<div class="cart-footer__title">
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
	</div>
	<ViewedProducts />
</template>

<style src="./styles.scss" lang="scss" scoped />