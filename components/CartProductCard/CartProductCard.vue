<script setup>
const props = defineProps({
	item: {
		type: Object,
		default: () => ({}),
	},
})

const emit = defineEmits(['remove', 'increase', 'decrease'])

const increaseQuantity = (item) => {
	emit('increase', item)
}

const decreaseQuantity = (item) => {
	emit('decrease', item)
}

const remove = (id) => {
	emit('remove', id)
}
</script>

<template>
	<div class="cart-product-card">
		<div class="cart-product-card__image">
			<img :src="item.img" />
		</div>
		<div class="cart-product-card__info">
			<span>
				<h4>
					{{ item.title }}
				</h4>
			</span>
			<span class="cart-product-card__info-text">
				{{ item.info }}
			</span>
			<span class="cart-product-card__info-article">
				{{ item.article }}
			</span>
		</div>
		<div class="cart-product-card__quantity">
			<ProductQuantity
				:quantity="item.quantity" 
				@increase="increaseQuantity(item)"
				@decrease="decreaseQuantity(item)"
			/>
			<div class="cart-product-card__quantity-original-price">
				<span v-if="item.quantity > 1">
					{{ item.originalPrice }} ₽/шт. 
				</span>
			</div>
		</div>
		<div class="cart-product-card__end">
			<span class="cart-product-card__end-price">
				{{ item.price }} ₽
			</span>
		</div>
		<div class="cart-product-card__action">
			<VButton
				appearance="text"
				class="cross"
				size="normal"
				@click="remove(item.id)"
			>
				<IconsIconCross />
			</VButton>
		</div>
	</div>
</template>

<style src="./styles.scss" lang="scss" scoped />