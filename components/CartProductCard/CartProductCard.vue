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
			<VImage 
				:src="props.item.img"
				loading="eager"
				:alt="props.item.title" 
			/>
		</div>
		<div class="cart-product-card__info">
			<span>
				<h4>
					{{ props.item.title }}
				</h4>
			</span>
			<span class="cart-product-card__subtitle">
				{{ props.item.subtitle }}
			</span>
			<span class="cart-product-card__article">
				{{ props.item.article }}
			</span>
		</div>
		<div class="cart-product-card__quantity">
			<ProductQuantity
				:quantity="props.item.quantity" 
				@increase="increaseQuantity(props.item)"
				@decrease="decreaseQuantity(props.item)"
			/>
			<div class="cart-product-card__original-price">
				<span v-if="props.item.quantity > 1">
					{{ props.item.originalPrice }} ₽/шт. 
				</span>
			</div>
		</div>
		<div class="cart-product-card__end">
			<span class="cart-product-card__price">
				{{ props.item.price }} ₽
			</span>
		</div>
		<div class="cart-product-card__action">
			<VButton
				data-appearance="text"
				data-size="normal"
				class="cross"
				@click="remove(props.item.id)"
			>
				<IconsIconCross />
			</VButton>
		</div>
	</div>
</template>

<style src="./styles.scss" lang="scss" scoped />