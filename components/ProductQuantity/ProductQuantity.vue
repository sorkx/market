<script setup>
import { useCartStore } from '~/store/cart'

const cart = useCartStore()

const props = defineProps({
	quantity: {
		type: [String, Number],
		default: '',
	},
	item: {
		type: Object,
		default: () => ({}),
	},
})
</script>

<template>
	<div class="quantity">
		<VButton
			modificator="color-gray"
			data-appearance="fill"
			data-size="quantity"
			class="quantity__button minus"
			@click="cart.decreaseQuantity(props.item)"
		>
			<IconsIconMinus />
		</VButton>
		<div class="quantity-count">
			<div class="quantity-count__value">
				{{ props.quantity }}
			</div>
		</div>
		<VButton
			modificator="color-gray"
			data-appearance="fill"
			data-size="quantity"
			class="quantity__button plus"
			@click="cart.increaseQuantity(props.item)"
		>
			<IconsIconPlus />
		</VButton>
	</div>
</template>

<style src="./styles.scss" lang="scss" scoped />